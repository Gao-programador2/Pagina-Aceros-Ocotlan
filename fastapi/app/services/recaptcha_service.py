"""Verificación opcional de reCAPTCHA v2."""

from __future__ import annotations

import logging

import httpx
from fastapi import HTTPException, status

from app.config import get_settings

logger = logging.getLogger(__name__)

VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify"


async def verificar_recaptcha(token: str | None) -> None:
    settings = get_settings()
    secret = settings.RECAPTCHA_SECRET_KEY.strip()
    if not secret:
        # Sin secret configurada: no bloquea (útil en pruebas locales)
        return

    if not token or not str(token).strip():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Completa el reCAPTCHA para continuar.",
        )

    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            respuesta = await client.post(
                VERIFY_URL,
                data={"secret": secret, "response": token},
            )
            data = respuesta.json()
    except Exception as exc:
        logger.warning("No se pudo verificar reCAPTCHA: %s", exc)
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="No se pudo verificar reCAPTCHA.",
        ) from exc

    if not data.get("success"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="reCAPTCHA inválido o expirado. Intenta de nuevo.",
        )
