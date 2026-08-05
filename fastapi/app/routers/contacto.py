from fastapi import APIRouter

from app.config import get_settings
from app.schemas.contacto import ContactoRequest, EnvioOk
from app.services.email_service import enviar_correo, plantilla_contacto
from app.services.recaptcha_service import verificar_recaptcha

router = APIRouter(prefix="/contacto", tags=["Contacto"])


@router.post("", response_model=EnvioOk)
async def enviar_contacto(payload: ContactoRequest) -> EnvioOk:
    await verificar_recaptcha(payload.token_captcha)
    settings = get_settings()

    texto = (
        "Contacto sitio web\n\n"
        f"Nombre: {payload.nombre}\n"
        f"Empresa: {payload.empresa}\n"
        f"Correo: {payload.correo}\n"
        f"Teléfono: {payload.telefono}\n\n"
        f"Mensaje:\n{payload.mensaje}\n"
    )

    html = plantilla_contacto(
        nombre=payload.nombre,
        empresa=payload.empresa,
        correo=str(payload.correo),
        telefono=payload.telefono,
        mensaje=payload.mensaje,
    )

    await enviar_correo(
        asunto=f"[Contacto web] {payload.nombre}",
        cuerpo_texto=texto,
        cuerpo_html=html,
        destinarios=settings.destinarios_contacto,
        settings=settings,
    )
    return EnvioOk(mensaje="Mensaje enviado correctamente")
