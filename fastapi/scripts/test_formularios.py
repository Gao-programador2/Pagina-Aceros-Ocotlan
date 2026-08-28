"""Prueba end-to-end de formularios (contacto + transparencia)."""
from __future__ import annotations

import io
import os
import sys
from pathlib import Path

# Configurar destinatario de prueba ANTES de importar la app
os.environ["CORREOS_IRREGULARIDADES"] = "programador2@corporativolaguna.mx"
os.environ["CORREOS_FRAUDES"] = "programador2@corporativolaguna.mx"
os.environ["CORREOS_CONTACTO"] = "programador2@corporativolaguna.mx"
os.environ["RECAPTCHA_SECRET_KEY"] = ""
os.environ["CLAMAV_ENABLED"] = "false"

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from pypdf import PdfWriter  # noqa: E402

from app.config import get_settings  # noqa: E402

get_settings.cache_clear()

from fastapi.testclient import TestClient  # noqa: E402
from app.main import app  # noqa: E402

client = TestClient(app)
RESULTADOS: list[str] = []

JPEG_VALIDO = bytes.fromhex(
    "ffd8ffe000104a46494600010100000100010000ffdb004300080606070605080707"
    "070909080a0c140d0c0b0b0c1912130f141d1a1f1e1d1a1c1c20242e2720222c231c"
    "1c2837292c30313434341f27393d38323c2e333432ffdb0043010909090c0b0c18"
    "0d0d1832211c213232323232323232323232323232323232323232323232323232"
    "323232323232323232323232323232323232323232323232ffc000110800010001"
    "0301110002110003110001ffc400150001010000000000000000000000000800"
    "050003ffc40014100100000000000000000000000000000000ffda0008010100"
    "00003f00d2cf20ffd9"
)


def pdf_valido() -> bytes:
    buf = io.BytesIO()
    writer = PdfWriter()
    writer.add_blank_page(width=72, height=72)
    writer.write(buf)
    return buf.getvalue()


def ok(nombre: str, detalle: str = "") -> None:
    msg = f"OK  {nombre}" + (f" — {detalle}" if detalle else "")
    RESULTADOS.append(msg)
    print(msg)


def fail(nombre: str, detalle: str) -> None:
    msg = f"FAIL {nombre} — {detalle}"
    RESULTADOS.append(msg)
    print(msg)


def test_health() -> None:
    r = client.get("/health")
    if r.status_code == 200 and r.json().get("status") == "ok":
        ok("Health check")
    else:
        fail("Health check", f"{r.status_code} {r.text}")


def test_contacto() -> None:
    payload = {
        "nombre": "Prueba QA Formularios",
        "empresa": "Corporativo Laguna",
        "correo": "programador2@corporativolaguna.mx",
        "telefono": "3312345678",
        "mensaje": "Mensaje de prueba automática desde test_formularios.py (inicio/contáctanos).",
        "token_captcha": "",
    }
    r = client.post("/api/contacto", json=payload)
    if r.status_code == 200:
        ok("Contacto (inicio)", r.json().get("mensaje", ""))
    else:
        fail("Contacto (inicio)", f"{r.status_code} {r.text}")


def test_irregularidades_sin_archivos() -> None:
    data = {
        "tipo_persona": "cliente-proveedor",
        "sucursal": "Sucursal prueba QA",
        "puesto": "Gerente",
        "nombres_implicados": "Persona de prueba",
        "area": "Ventas",
        "fecha_suceso": "2026-08-28",
        "hora_suceso": "10:00",
        "tipo_irregularidad": "Mal servicio",
        "narracion": "Narración de prueba con hechos objetivos para validar el envío del formulario de irregularidades.",
        "sugerencias": "Prueba automatizada",
        "correo": "programador2@corporativolaguna.mx",
        "telefono": "3312345678",
    }
    r = client.post("/api/transparencia/irregularidades", data=data)
    if r.status_code == 200:
        ok("Irregularidades sin adjuntos", r.json().get("mensaje", ""))
    else:
        fail("Irregularidades sin adjuntos", f"{r.status_code} {r.text}")


def test_irregularidades_con_archivos() -> None:
    data = {
        "tipo_persona": "colaborador",
        "sucursal": "QA Sucursal",
        "narracion": "Prueba con adjuntos PDF y JPG válidos.",
        "correo": "programador2@corporativolaguna.mx",
    }
    files = [
        ("archivos", ("evidencia.pdf", pdf_valido(), "application/pdf")),
        ("archivos", ("captura.jpg", JPEG_VALIDO, "image/jpeg")),
    ]
    r = client.post("/api/transparencia/irregularidades", data=data, files=files)
    if r.status_code == 200:
        ok("Irregularidades con PDF + JPG válidos", r.json().get("mensaje", ""))
    else:
        fail("Irregularidades con PDF + JPG válidos", f"{r.status_code} {r.text}")


def test_rechaza_png_y_txt() -> None:
    data = {"narracion": "Prueba rechazo tipos no permitidos"}
    files = [
        ("archivos", ("captura.png", b"\x89PNG\r\n\x1a\n fake", "image/png")),
    ]
    r = client.post("/api/transparencia/irregularidades", data=data, files=files)
    if r.status_code == 400 and "no está permitido" in r.text:
        ok("PNG rechazado")
    else:
        fail("PNG rechazado", f"{r.status_code} {r.text}")

    files = [("archivos", ("nota.txt", b"texto", "text/plain"))]
    r = client.post("/api/transparencia/irregularidades", data=data, files=files)
    if r.status_code == 400:
        ok("TXT rechazado")
    else:
        fail("TXT rechazado", f"{r.status_code} {r.text}")


def test_rechaza_pdf_falso() -> None:
    data = {"narracion": "Prueba PDF renombrado"}
    files = [("archivos", ("falso.pdf", b"%PDF-1.4 solo cabecera", "application/pdf"))]
    r = client.post("/api/transparencia/irregularidades", data=data, files=files)
    if r.status_code == 400 and "verificación de seguridad" in r.text:
        ok("PDF falso rechazado")
    else:
        fail("PDF falso rechazado", f"{r.status_code} {r.text}")


def test_fraudes_con_archivos() -> None:
    data = {
        "correo": "programador2@corporativolaguna.mx",
        "nombre": "Prueba QA Fraudes",
        "narracion": "Denuncia de fraude de prueba con evidencia adjunta.",
        "enlace_fraudulento": "https://ejemplo-falso.test/perfil",
    }
    files = [
        ("archivos", ("evidencia.jpg", JPEG_VALIDO, "image/jpeg")),
    ]
    r = client.post("/api/transparencia/fraudes", data=data, files=files)
    if r.status_code == 200:
        ok("Fraudes con 1 adjunto (jpg)", r.json().get("mensaje", ""))
    else:
        fail("Fraudes con 1 adjunto", f"{r.status_code} {r.text}")


def test_limite_archivos() -> None:
    data = {"narracion": "Prueba límite de archivos"}
    files = [
        ("archivos", (f"archivo{i}.pdf", pdf_valido(), "application/pdf"))
        for i in range(9)
    ]
    r = client.post("/api/transparencia/irregularidades", data=data, files=files)
    if r.status_code == 400 and "Máximo 8" in r.text:
        ok("Límite 9 archivos rechazado correctamente")
    else:
        fail("Límite 9 archivos", f"esperaba 400, obtuvo {r.status_code} {r.text}")


def test_archivo_grande() -> None:
    data = {"narracion": "Prueba archivo grande"}
    grande = b"x" * (8 * 1024 * 1024 + 1)
    files = [("archivos", ("grande.pdf", grande, "application/pdf"))]
    r = client.post("/api/transparencia/irregularidades", data=data, files=files)
    if r.status_code == 400 and "8 MB" in r.text:
        ok("Archivo >8 MB rechazado correctamente")
    else:
        fail("Archivo >8 MB", f"esperaba 400, obtuvo {r.status_code} {r.text}")


def test_fraudes_sin_archivos_api() -> None:
    """El front exige archivo; el API no lo exige."""
    data = {
        "narracion": "Prueba API sin adjunto",
        "enlace_fraudulento": "https://fake.test",
    }
    r = client.post("/api/transparencia/fraudes", data=data)
    if r.status_code == 200:
        ok("Fraudes API sin adjunto (backend permite; front no)")
    else:
        fail("Fraudes API sin adjunto", f"{r.status_code} {r.text}")


def main() -> int:
    cfg = get_settings()
    print("Destinatarios de prueba:")
    print("  irregularidades:", cfg.destinarios_irregularidades)
    print("  fraudes:", cfg.destinarios_fraudes)
    print("  contacto:", cfg.destinarios_contacto)
    print("-" * 60)

    test_health()
    test_contacto()
    test_irregularidades_sin_archivos()
    test_irregularidades_con_archivos()
    test_rechaza_png_y_txt()
    test_rechaza_pdf_falso()
    test_fraudes_con_archivos()
    test_limite_archivos()
    test_archivo_grande()
    test_fraudes_sin_archivos_api()

    print("-" * 60)
    fails = [r for r in RESULTADOS if r.startswith("FAIL")]
    print(f"Resumen: {len(RESULTADOS) - len(fails)}/{len(RESULTADOS)} OK")
    if fails:
        for f in fails:
            print(f)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
