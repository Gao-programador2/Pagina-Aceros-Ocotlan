from fastapi import APIRouter, File, Form, UploadFile

from app.config import get_settings
from app.schemas.contacto import EnvioOk
from app.services.email_service import (
    enviar_correo,
    fila_html,
    leer_adjuntos,
    plantilla_transparencia,
)

router = APIRouter(prefix="/transparencia", tags=["Transparencia"])

# Barra izquierda del bloque narración (como "Mensaje" en contacto)
ACENTO_IRREGULARIDADES = "#c2410c"  # naranja/terracota
ACENTO_FRAUDES = "#b91c1c"  # rojo


@router.post("/irregularidades", response_model=EnvioOk)
async def denuncia_irregularidades(
    tipo_persona: str = Form(""),
    sucursal: str = Form(""),
    puesto: str = Form(""),
    nombres_implicados: str = Form(""),
    area: str = Form(""),
    fecha_suceso: str = Form(""),
    hora_suceso: str = Form(""),
    tipo_irregularidad: str = Form(""),
    narracion: str = Form(...),
    sugerencias: str = Form(""),
    correo: str = Form(""),
    telefono: str = Form(""),
    archivos: list[UploadFile] | None = File(None),
) -> EnvioOk:
    settings = get_settings()
    adjuntos = await leer_adjuntos(archivos or [])

    filas = "".join(
        [
            fila_html("Tipo de persona", tipo_persona),
            fila_html("Sucursal", sucursal),
            fila_html("Puesto", puesto),
            fila_html("Nombres implicados", nombres_implicados),
            fila_html("Área", area),
            fila_html("Fecha del suceso", fecha_suceso),
            fila_html("Hora del suceso", hora_suceso),
            fila_html("Tipo de irregularidad", tipo_irregularidad),
            fila_html("Sugerencias", sugerencias),
            fila_html("Correo de contacto", correo),
            fila_html("Teléfono", telefono, ultima=True),
        ]
    )

    texto = (
        "Denuncia de irregularidades\n\n"
        f"Tipo persona: {tipo_persona}\n"
        f"Sucursal: {sucursal}\n"
        f"Puesto: {puesto}\n"
        f"Implicados: {nombres_implicados}\n"
        f"Área: {area}\n"
        f"Fecha: {fecha_suceso} {hora_suceso}\n"
        f"Tipo: {tipo_irregularidad}\n"
        f"Narración:\n{narracion}\n\n"
        f"Sugerencias:\n{sugerencias}\n\n"
        f"Contacto: {correo} / {telefono}\n"
    )

    html = plantilla_transparencia(
        titulo="Denuncia de irregularidades",
        etiqueta_seccion="Irregularidades",
        intro="Recibiste un reporte desde Transparencia. Revisa los datos y la narración para dar seguimiento.",
        filas=filas,
        narracion=narracion,
        etiqueta_narracion="Narración",
        acento_barra=ACENTO_IRREGULARIDADES,
    )

    await enviar_correo(
        asunto="[Transparencia] Denuncia de irregularidades",
        cuerpo_texto=texto,
        cuerpo_html=html,
        destinarios=settings.destinarios_irregularidades,
        adjuntos=adjuntos,
        settings=settings,
    )
    return EnvioOk(mensaje="Denuncia enviada correctamente")


@router.post("/fraudes", response_model=EnvioOk)
async def denuncia_fraudes(
    correo: str = Form(""),
    nombre: str = Form(""),
    narracion: str = Form(...),
    enlace_fraudulento: str = Form(""),
    archivos: list[UploadFile] | None = File(None),
) -> EnvioOk:
    settings = get_settings()
    adjuntos = await leer_adjuntos(archivos or [])

    filas = "".join(
        [
            fila_html("Nombre", nombre),
            fila_html("Correo", correo),
            fila_html("Enlace fraudulento", enlace_fraudulento, ultima=True),
        ]
    )

    texto = (
        "Denuncia de fraude\n\n"
        f"Nombre: {nombre}\n"
        f"Correo: {correo}\n"
        f"Enlace: {enlace_fraudulento}\n\n"
        f"Narración:\n{narracion}\n"
    )

    html = plantilla_transparencia(
        titulo="Denuncia de fraude",
        etiqueta_seccion="Fraudes",
        intro="Recibiste una alerta de fraude desde Transparencia. Revisa el enlace y la narración con prioridad.",
        filas=filas,
        narracion=narracion,
        etiqueta_narracion="Narración",
        acento_barra=ACENTO_FRAUDES,
    )

    await enviar_correo(
        asunto="[Transparencia] Denuncia de fraude",
        cuerpo_texto=texto,
        cuerpo_html=html,
        destinarios=settings.destinarios_fraudes,
        adjuntos=adjuntos,
        settings=settings,
    )
    return EnvioOk(mensaje="Denuncia enviada correctamente")
