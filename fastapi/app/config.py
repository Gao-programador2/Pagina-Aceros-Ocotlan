from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

_ENV_FILE = Path(__file__).resolve().parent.parent / ".env"


def _parse_correos(valor: str) -> list[str]:
    return [c.strip() for c in valor.replace(";", ",").split(",") if c.strip()]


class Settings(BaseSettings):
    """
    Toda la configuración sensible vive aquí (vía .env).

    Remitente: cambia solo SMTP_FROM en fastapi/.env
    Destinatarios: CORREOS_IRREGULARIDADES / CORREOS_FRAUDES / CORREOS_CONTACTO
    """

    model_config = SettingsConfigDict(
        env_file=str(_ENV_FILE),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    APP_NAME: str = "Pagina Web API"
    DEBUG: bool = False

    CORS_ORIGINS: str = (
        "http://localhost:5173,"
        "http://127.0.0.1:5173,"
        "https://acerosocotlan.mx,"
        "https://www.acerosocotlan.mx"
    )

    SMTP_HOST: str = ""
    SMTP_PORT: int = 587
    SMTP_USER: str = ""
    SMTP_PASSWORD: str = ""
    # Remitente visible en el correo (cámbialo en .env, una sola línea)
    SMTP_FROM: str = ""

    CORREOS_IRREGULARIDADES: str = ""
    CORREOS_FRAUDES: str = ""
    CORREOS_CONTACTO: str = ""

    RECAPTCHA_SECRET_KEY: str = ""

    # Antivirus opcional (ClamAV). En producción: CLAMAV_ENABLED=true
    CLAMAV_ENABLED: bool = False
    CLAMAV_HOST: str = "127.0.0.1"
    CLAMAV_PORT: int = 3310
    CLAMAV_SOCKET: str = "/var/run/clamav/clamd.ctl"

    # Seguridad HTTP
    TRUSTED_HOSTS: str = ""
    RATE_LIMIT_ENABLED: bool = True
    RATE_LIMIT_MAX: int = 25
    RATE_LIMIT_WINDOW_SEC: int = 60

    @property
    def trusted_hosts_list(self) -> list[str]:
        return [h.strip() for h in self.TRUSTED_HOSTS.split(",") if h.strip()]

    @property
    def cors_origins_list(self) -> list[str]:
        return [o.strip() for o in self.CORS_ORIGINS.split(",") if o.strip()]

    @property
    def remitente(self) -> str:
        """Correo From: prioriza SMTP_FROM; si está vacío usa SMTP_USER."""
        return (self.SMTP_FROM or self.SMTP_USER or "").strip()

    @property
    def destinarios_irregularidades(self) -> list[str]:
        return _parse_correos(self.CORREOS_IRREGULARIDADES)

    @property
    def destinarios_fraudes(self) -> list[str]:
        return _parse_correos(self.CORREOS_FRAUDES)

    @property
    def destinarios_contacto(self) -> list[str]:
        return _parse_correos(self.CORREOS_CONTACTO)


@lru_cache
def get_settings() -> Settings:
    return Settings()
