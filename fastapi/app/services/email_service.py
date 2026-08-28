"""
Envío de correos por SMTP.

Remitente: settings.remitente  →  variable SMTP_FROM en fastapi/.env
Plantillas HTML elegantes:
  - Navbar azul + logo blanco (AO_Logo.png)
  - Pie con logo azul (azul_AO.png) visible sobre fondo claro
"""

from __future__ import annotations

import asyncio
import logging
import smtplib
from email.message import EmailMessage
from email.utils import formataddr
from pathlib import Path

from fastapi import HTTPException, UploadFile, status

from app.config import Settings, get_settings

logger = logging.getLogger(__name__)

MAX_ARCHIVOS = 8
MAX_BYTES_ARCHIVO = 8 * 1024 * 1024  # 8 MB

LOGO_BLANCO_CID = "logo_ao_blanco"
LOGO_AZUL_CID = "logo_ao_azul"
ASSETS_DIR = Path(__file__).resolve().parent.parent.parent / "assets"
LOGO_BLANCO_PATH = ASSETS_DIR / "AO_Logo.png"
LOGO_AZUL_PATH = ASSETS_DIR / "azul_AO.png"

AZUL = "#1a4789"
AZUL_OSCURO = "#0d3a73"
ACERO = "#5a6575"

ESTILOS_FORMULARIO = {
    "Irregularidades": {
        "badge_bg": "#c2410c",
        "banda_bg": "#fff7ed",
        "banda_texto": "#9a3412",
        "banda_borde": "#c2410c",
    },
    "Fraudes": {
        "badge_bg": "#b91c1c",
        "banda_bg": "#fef2f2",
        "banda_texto": "#991b1b",
        "banda_borde": "#b91c1c",
    },
    "Contacto": {
        "badge_bg": "#0d47a1",
        "banda_bg": "#eff6ff",
        "banda_texto": "#1e3a8a",
        "banda_borde": "#0d47a1",
    },
}


def escapar_html(valor: str) -> str:
    texto = (valor or "—").strip() or "—"
    return (
        texto.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace("\n", "<br>")
    )


async def leer_adjuntos(archivos: list[UploadFile] | None) -> list[tuple[str, bytes, str]]:
    """Devuelve lista (nombre, bytes, content_type)."""
    if not archivos:
        return []

    if len(archivos) > MAX_ARCHIVOS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Máximo {MAX_ARCHIVOS} archivos adjuntos.",
        )

    resultado: list[tuple[str, bytes, str]] = []
    for archivo in archivos:
        data = await archivo.read()
        if len(data) > MAX_BYTES_ARCHIVO:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"El archivo '{archivo.filename}' supera 8 MB.",
            )
        nombre = archivo.filename or "adjunto"
        tipo = archivo.content_type or "application/octet-stream"
        resultado.append((nombre, data, tipo))
    return resultado


def _navbar_azul(etiqueta: str = "Aceros Ocotlán") -> str:
    """Barra superior azul con logo blanco y textos en blanco."""
    return f"""
      <tr>
        <td bgcolor="{AZUL}" style="background-color:{AZUL};background:{AZUL};padding:14px 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="vertical-align:middle;width:56px;">
                <img src="cid:{LOGO_BLANCO_CID}" alt="AO" width="44" height="44" style="display:block;width:44px;height:auto;border:0;outline:none;" />
              </td>
              <td style="vertical-align:middle;padding-left:12px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;color:#ffffff !important;letter-spacing:0.02em;">
                  <span style="color:#ffffff;">{escapar_html(etiqueta)}</span>
                </p>
                <p style="margin:2px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#ffffff !important;">
                  <span style="color:#e8eef8;">Un Mundo de Acero</span>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    """


def _encabezado_formulario(*, tipo: str, titulo: str, subtitulo: str) -> str:
    """
    Encabezado visible en clientes de correo (Outlook/IIS).
    Usa bgcolor sólido + banda de identificación de alto contraste.
    """
    estilo = ESTILOS_FORMULARIO.get(tipo, ESTILOS_FORMULARIO["Contacto"])
    tipo_html = escapar_html(tipo.upper())
    titulo_html = escapar_html(titulo)
    subtitulo_html = escapar_html(subtitulo)

    return f"""
      <tr>
        <td bgcolor="{AZUL}" style="background-color:{AZUL};padding:22px 32px 18px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td bgcolor="{estilo['badge_bg']}" style="background-color:{estilo['badge_bg']};padding:8px 16px;border-radius:999px;">
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:bold;letter-spacing:0.14em;text-transform:uppercase;color:#ffffff;">
                  <font color="#ffffff">{tipo_html}</font>
                </span>
              </td>
            </tr>
          </table>
          <h1 style="margin:14px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:normal;line-height:1.35;color:#ffffff;">
            <font color="#ffffff">{titulo_html}</font>
          </h1>
          <p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.5;color:#dbeafe;">
            <font color="#dbeafe">{subtitulo_html}</font>
          </p>
        </td>
      </tr>
      <tr>
        <td bgcolor="{estilo['banda_bg']}" style="background-color:{estilo['banda_bg']};padding:12px 32px;border-bottom:3px solid {estilo['banda_borde']};">
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:{estilo['banda_texto']};">
            <font color="{estilo['banda_texto']}">Origen del formulario: {tipo_html}</font>
          </p>
        </td>
      </tr>
    """


def _pie_con_logo() -> str:
    return f"""
      <tr>
        <td style="padding:28px 32px 24px;background:#f7f8fb;border-top:1px solid #e6eaf0;text-align:center;">
          <img src="cid:{LOGO_AZUL_CID}" alt="Aceros Ocotlán" width="120" style="display:inline-block;max-width:120px;height:auto;border:0;outline:none;text-decoration:none;margin:0 0 12px;" />
          <p style="margin:0 0 4px;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:{AZUL};letter-spacing:0.02em;">
            Aceros Ocotlán
          </p>
          <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:{ACERO};">
            Un Mundo de Acero
          </p>
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#8a93a3;">
            Mensaje generado desde Aceros Ocotlán ·
            <a href="https://acerosocotlan.mx" style="color:{AZUL};text-decoration:none;">acerosocotlan.mx</a>
          </p>
        </td>
      </tr>
    """


def plantilla_contacto(
    *,
    nombre: str,
    empresa: str,
    correo: str,
    telefono: str,
    mensaje: str,
) -> str:
    """Diseño elegante para el formulario Contáctanos."""
    n = escapar_html(nombre)
    e = escapar_html(empresa)
    c = escapar_html(correo)
    t = escapar_html(telefono)
    m = escapar_html(mensaje)

    return f"""<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nuevo contacto</title>
</head>
<body style="margin:0;padding:0;background:#eef1f6;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef1f6;padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #dde3ec;box-shadow:0 8px 28px rgba(26,71,137,0.08);">

          {_navbar_azul("Aceros Ocotlán")}

          {_encabezado_formulario(
              tipo="Contacto",
              titulo="Nuevo mensaje de contacto",
              subtitulo="Formulario Contáctanos del sitio web",
          )}

          <!-- Intro -->
          <tr>
            <td style="padding:28px 32px 8px;">
              <p style="margin:0;font-size:15px;line-height:1.6;color:#334155;">
                Recibiste una solicitud desde el formulario de contacto.
                <strong style="color:{AZUL};">{n}</strong> dejó sus datos para que le den seguimiento.
              </p>
            </td>
          </tr>

          <!-- Datos -->
          <tr>
            <td style="padding:16px 32px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8edf5;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:14px 18px;background:#f8fafc;border-bottom:1px solid #e8edf5;width:34%;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:{ACERO};">Nombre</td>
                  <td style="padding:14px 18px;border-bottom:1px solid #e8edf5;font-size:15px;color:#1e293b;">{n}</td>
                </tr>
                <tr>
                  <td style="padding:14px 18px;background:#f8fafc;border-bottom:1px solid #e8edf5;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:{ACERO};">Empresa</td>
                  <td style="padding:14px 18px;border-bottom:1px solid #e8edf5;font-size:15px;color:#1e293b;">{e}</td>
                </tr>
                <tr>
                  <td style="padding:14px 18px;background:#f8fafc;border-bottom:1px solid #e8edf5;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:{ACERO};">Correo</td>
                  <td style="padding:14px 18px;border-bottom:1px solid #e8edf5;font-size:15px;">
                    <a href="mailto:{c}" style="color:{AZUL};text-decoration:none;">{c}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 18px;background:#f8fafc;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:{ACERO};">Teléfono</td>
                  <td style="padding:14px 18px;font-size:15px;">
                    <a href="tel:{t}" style="color:{AZUL};text-decoration:none;">{t}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Mensaje -->
          <tr>
            <td style="padding:20px 32px 8px;">
              <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:{ACERO};">
                Mensaje
              </p>
              <div style="padding:18px 20px;background:#f4f7fb;border-left:4px solid {AZUL};border-radius:0 12px 12px 0;">
                <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.7;color:#1e293b;">
                  {m}
                </p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:24px 32px 8px;text-align:center;">
              <a href="mailto:{c}" style="display:inline-block;padding:12px 28px;background:{AZUL};color:#ffffff;font-size:14px;font-weight:bold;text-decoration:none;border-radius:999px;">
                Responder a {n}
              </a>
            </td>
          </tr>

          {_pie_con_logo()}

        </table>
      </td>
    </tr>
  </table>
</body>
</html>"""


def fila_html(etiqueta: str, valor: str, *, ultima: bool = False) -> str:
    """Fila limpia (mismo estilo que contacto)."""
    borde = "" if ultima else "border-bottom:1px solid #e8edf5;"
    return (
        f'<tr>'
        f'<td style="padding:14px 18px;background:#f8fafc;{borde}'
        f'width:34%;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:{ACERO};">'
        f'{escapar_html(etiqueta)}</td>'
        f'<td style="padding:14px 18px;{borde}font-size:15px;color:#1e293b;line-height:1.5;">'
        f'{escapar_html(valor)}</td>'
        f'</tr>'
    )


def plantilla_transparencia(
    *,
    titulo: str,
    etiqueta_seccion: str,
    intro: str,
    filas: str,
    narracion: str,
    etiqueta_narracion: str = "Narración",
    acento_barra: str = AZUL,
) -> str:
    """
    Mismo formato que Contáctanos.
    La barra izquierda de la narración distingue irregularidades vs fraude.
    """
    return f"""<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{escapar_html(titulo)}</title>
</head>
<body style="margin:0;padding:0;background:#eef1f6;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef1f6;padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #dde3ec;box-shadow:0 8px 28px rgba(26,71,137,0.08);">

          {_navbar_azul("Aceros Ocotlán")}

          {_encabezado_formulario(
              tipo=etiqueta_seccion,
              titulo=titulo,
              subtitulo=f"Formulario de Transparencia · {etiqueta_seccion}",
          )}

          <!-- Intro -->
          <tr>
            <td style="padding:28px 32px 8px;">
              <p style="margin:0;font-size:15px;line-height:1.6;color:#334155;">
                {escapar_html(intro)}
              </p>
            </td>
          </tr>

          <!-- Datos -->
          <tr>
            <td style="padding:16px 32px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8edf5;border-radius:12px;overflow:hidden;">
                {filas}
              </table>
            </td>
          </tr>

          <!-- Narración / mensaje destacado -->
          <tr>
            <td style="padding:20px 32px 28px;">
              <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:{ACERO};">
                {escapar_html(etiqueta_narracion)}
              </p>
              <div style="padding:18px 20px;background:#f4f7fb;border-left:4px solid {acento_barra};border-radius:0 12px 12px 0;">
                <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.7;color:#1e293b;">
                  {escapar_html(narracion)}
                </p>
              </div>
            </td>
          </tr>

          {_pie_con_logo()}

        </table>
      </td>
    </tr>
  </table>
</body>
</html>"""


# Compatibilidad con llamadas antiguas
def envolver_html(titulo: str, filas: str) -> str:
    return plantilla_transparencia(
        titulo=titulo,
        etiqueta_seccion="Transparencia",
        intro="Denuncia recibida desde Aceros Ocotlán.",
        filas=filas,
        narracion="—",
        acento_barra=AZUL,
    )


def _adjuntar_logos_cid(msg: EmailMessage) -> None:
    html_part = None
    for part in msg.iter_parts():
        if part.get_content_maintype() == "text" and part.get_content_subtype() == "html":
            html_part = part
            break
    if html_part is None:
        return

    logos = (
        (LOGO_BLANCO_PATH, LOGO_BLANCO_CID, "AO_Logo.png"),
        (LOGO_AZUL_PATH, LOGO_AZUL_CID, "azul_AO.png"),
    )
    for path, cid, filename in logos:
        if not path.exists():
            logger.warning("No se encontró logo para el correo: %s", path)
            continue
        try:
            html_part.add_related(
                path.read_bytes(),
                maintype="image",
                subtype="png",
                cid=f"<{cid}>",
                filename=filename,
            )
        except Exception as exc:
            logger.warning("No se pudo embeber %s: %s", filename, exc)


def _construir_mensaje(
    *,
    asunto: str,
    cuerpo_texto: str,
    cuerpo_html: str,
    destinarios: list[str],
    remitente: str,
    adjuntos: list[tuple[str, bytes, str]] | None = None,
) -> EmailMessage:
    msg = EmailMessage()
    msg["Subject"] = asunto
    msg["From"] = formataddr(("Aceros Ocotlán", remitente))
    msg["To"] = ", ".join(destinarios)
    msg.set_content(cuerpo_texto)
    msg.add_alternative(cuerpo_html, subtype="html")
    _adjuntar_logos_cid(msg)

    for nombre, data, content_type in adjuntos or []:
        maintype, _, subtype = content_type.partition("/")
        if not subtype:
            maintype, subtype = "application", "octet-stream"
        msg.add_attachment(
            data,
            maintype=maintype,
            subtype=subtype,
            filename=nombre,
        )
    return msg


def _enviar_smtp_sync(msg: EmailMessage, settings: Settings) -> None:
    host = settings.SMTP_HOST.strip()
    port = settings.SMTP_PORT
    user = settings.SMTP_USER.strip()
    password = settings.SMTP_PASSWORD
    if not host or not settings.remitente:
        raise RuntimeError("SMTP no configurado (SMTP_HOST / SMTP_FROM).")

    with smtplib.SMTP(host, port, timeout=30) as smtp:
        smtp.ehlo()
        if port != 25:
            try:
                smtp.starttls()
                smtp.ehlo()
            except smtplib.SMTPException:
                pass
        if user and password:
            smtp.login(user, password)
        smtp.send_message(msg)


async def enviar_correo(
    *,
    asunto: str,
    cuerpo_texto: str,
    cuerpo_html: str,
    destinarios: list[str],
    adjuntos: list[tuple[str, bytes, str]] | None = None,
    settings: Settings | None = None,
) -> None:
    cfg = settings or get_settings()
    if not destinarios:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="No hay destinatarios configurados en el servidor.",
        )
    if not cfg.remitente:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Falta SMTP_FROM (remitente) en fastapi/.env",
        )

    msg = _construir_mensaje(
        asunto=asunto,
        cuerpo_texto=cuerpo_texto,
        cuerpo_html=cuerpo_html,
        destinarios=destinarios,
        remitente=cfg.remitente,
        adjuntos=adjuntos,
    )

    try:
        await asyncio.to_thread(_enviar_smtp_sync, msg, cfg)
    except HTTPException:
        raise
    except Exception as exc:
        logger.exception("Error SMTP al enviar correo")
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail=f"No se pudo enviar el correo: {exc}",
        ) from exc
