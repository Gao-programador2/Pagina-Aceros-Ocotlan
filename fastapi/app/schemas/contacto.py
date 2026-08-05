from pydantic import BaseModel, EmailStr, Field


class ContactoRequest(BaseModel):
    nombre: str = Field(..., min_length=1, max_length=200)
    empresa: str = Field(default="", max_length=200)
    correo: EmailStr
    telefono: str = Field(..., min_length=1, max_length=40)
    mensaje: str = Field(..., min_length=1, max_length=5000)
    token_captcha: str = Field(default="", max_length=4000)


class EnvioOk(BaseModel):
    ok: bool = True
    mensaje: str = "Enviado correctamente"
