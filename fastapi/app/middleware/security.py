"""Cabeceras de seguridad y limitación básica de solicitudes."""

from __future__ import annotations

import time
from collections import defaultdict, deque
from typing import Callable

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse, Response

from app.config import get_settings


class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        response = await call_next(request)
        response.headers.setdefault("X-Content-Type-Options", "nosniff")
        response.headers.setdefault("X-Frame-Options", "DENY")
        response.headers.setdefault("Referrer-Policy", "strict-origin-when-cross-origin")
        response.headers.setdefault("Permissions-Policy", "geolocation=(), microphone=(), camera=()")
        response.headers.setdefault("X-XSS-Protection", "0")
        response.headers.setdefault("Cache-Control", "no-store")
        return response


class RateLimitMiddleware(BaseHTTPMiddleware):
    """Limita POST a /api/ por IP para reducir spam y abuso."""

    def __init__(self, app, *, max_solicitudes: int = 25, ventana_seg: int = 60):
        super().__init__(app)
        self.max_solicitudes = max_solicitudes
        self.ventana_seg = ventana_seg
        self._historial: dict[str, deque[float]] = defaultdict(deque)

    def _ip_cliente(self, request: Request) -> str:
        reenviado = request.headers.get("x-forwarded-for", "").split(",")[0].strip()
        if reenviado:
            return reenviado
        if request.client:
            return request.client.host
        return "desconocido"

    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        if request.method != "POST" or not request.url.path.startswith("/api/"):
            return await call_next(request)

        cfg = get_settings()
        if not cfg.RATE_LIMIT_ENABLED:
            return await call_next(request)

        ip = self._ip_cliente(request)
        ahora = time.monotonic()
        cola = self._historial[ip]

        while cola and ahora - cola[0] > self.ventana_seg:
            cola.popleft()

        if len(cola) >= self.max_solicitudes:
            return JSONResponse(
                status_code=429,
                content={"detail": "Demasiadas solicitudes. Espera un momento e inténtalo de nuevo."},
            )

        cola.append(ahora)
        return await call_next(request)
