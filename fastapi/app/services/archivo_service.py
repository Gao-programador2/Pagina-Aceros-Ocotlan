"""
Validación segura de adjuntos (Transparencia).

- Solo PDF y JPG/JPEG
- Verificación por extensión, MIME y contenido (magic bytes)
- Estructura PDF con pypdf
- Escaneo antivirus opcional con ClamAV (CLAMAV_ENABLED=true)
"""

from __future__ import annotations

import io
import logging
import re
from pathlib import Path

from fastapi import HTTPException, UploadFile, status
from pypdf import PdfReader
from pypdf.errors import PdfReadError

from app.config import Settings, get_settings

logger = logging.getLogger(__name__)

MAX_ARCHIVOS = 8
MAX_BYTES_ARCHIVO = 8 * 1024 * 1024

EXTENSIONES_PERMITIDAS = {".pdf", ".jpg", ".jpeg"}
MIME_PERMITIDOS = {"application/pdf", "image/jpeg"}
NOMBRE_SEGURO = re.compile(r"^[\w.\- ()áéíóúÁÉÍÓÚñÑ]+$")


def _extension(nombre: str) -> str:
    return Path(nombre).suffix.lower()


def _validar_nombre(nombre: str) -> str:
    limpio = (nombre or "adjunto").strip().replace("\\", "/").split("/")[-1]
    if not limpio or limpio.startswith("."):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Nombre de archivo no válido.",
        )
    if ".." in limpio:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Nombre de archivo no permitido: '{limpio}'.",
        )
    extension = _extension(limpio)
    base = limpio[: -len(extension)] if extension else limpio
    if extension and "." in base:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Nombre de archivo no permitido: '{limpio}'.",
        )
    if not NOMBRE_SEGURO.match(limpio):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Nombre de archivo no permitido: '{limpio}'.",
        )
    return limpio


def _es_jpeg_valido(data: bytes) -> bool:
    if len(data) < 4:
        return False
    if not data.startswith(b"\xff\xd8\xff"):
        return False
    # JPEG bien formado termina con marcador EOI
    return data.rstrip(b"\x00").endswith(b"\xff\xd9")


def _es_pdf_valido(data: bytes) -> bool:
    if len(data) < 5 or not data.startswith(b"%PDF-"):
        return False
    try:
        lector = PdfReader(io.BytesIO(data), strict=True)
        if lector.is_encrypted:
            return False
        _ = len(lector.pages)
        return True
    except PdfReadError:
        return False
    except Exception:
        return False


def _tipo_contenido_real(data: bytes, extension: str) -> str | None:
    if extension == ".pdf" and _es_pdf_valido(data):
        return "application/pdf"
    if extension in {".jpg", ".jpeg"} and _es_jpeg_valido(data):
        return "image/jpeg"
    return None


def _escanear_clamav(data: bytes, nombre: str, settings: Settings) -> None:
    if not settings.CLAMAV_ENABLED:
        return

    try:
        import pyclamd
    except ImportError as exc:
        logger.error("ClamAV habilitado pero falta pyclamd: %s", exc)
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="El escaneo antivirus no está disponible en el servidor.",
        ) from exc

    try:
        if settings.CLAMAV_HOST.strip():
            cd = pyclamd.ClamdNetworkSocket(
                settings.CLAMAV_HOST.strip(),
                settings.CLAMAV_PORT,
            )
        else:
            cd = pyclamd.ClamdUnixSocket(settings.CLAMAV_SOCKET)

        if not cd.ping():
            raise ConnectionError("ClamAV no responde")

        resultado = cd.scan_stream(data)
        if resultado:
            estado = resultado.get("stream") or next(iter(resultado.values()), "")
            if estado and "FOUND" in str(estado).upper():
                logger.warning("Archivo infectado rechazado: %s (%s)", nombre, estado)
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=(
                        f"El archivo '{nombre}' fue rechazado por el antivirus. "
                        "No subas archivos infectados o sospechosos."
                    ),
                )
    except HTTPException:
        raise
    except Exception as exc:
        logger.exception("Error al escanear con ClamAV: %s", exc)
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="No se pudo verificar el archivo con el antivirus. Intenta más tarde.",
        ) from exc


async def leer_adjuntos_seguros(
    archivos: list[UploadFile] | None,
    *,
    settings: Settings | None = None,
) -> list[tuple[str, bytes, str]]:
    """Lee y valida adjuntos permitidos (PDF/JPG)."""
    cfg = settings or get_settings()

    if not archivos:
        return []

    if len(archivos) > MAX_ARCHIVOS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Máximo {MAX_ARCHIVOS} archivos adjuntos.",
        )

    resultado: list[tuple[str, bytes, str]] = []

    for archivo in archivos:
        nombre_raw = archivo.filename or "adjunto"
        nombre = _validar_nombre(nombre_raw)
        extension = _extension(nombre)

        if extension not in EXTENSIONES_PERMITIDAS:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=(
                    f"El archivo '{nombre}' no está permitido. "
                    "Solo se aceptan PDF y JPG (máx. 8 archivos de 8 MB c/u)."
                ),
            )

        mime_declarado = (archivo.content_type or "").split(";", 1)[0].strip().lower()
        if mime_declarado and mime_declarado not in MIME_PERMITIDOS:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"El archivo '{nombre}' no es un PDF o JPG válido.",
            )

        data = await archivo.read()
        if not data:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"El archivo '{nombre}' está vacío.",
            )
        if len(data) > MAX_BYTES_ARCHIVO:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"El archivo '{nombre}' supera 8 MB.",
            )

        tipo_real = _tipo_contenido_real(data, extension)
        if not tipo_real:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=(
                    f"El archivo '{nombre}' no pasó la verificación de seguridad. "
                    "Usa un PDF o JPG genuino, sin renombrar otros formatos."
                ),
            )

        _escanear_clamav(data, nombre, cfg)
        resultado.append((nombre, data, tipo_real))

    return resultado
