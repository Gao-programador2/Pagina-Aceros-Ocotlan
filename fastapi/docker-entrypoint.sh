#!/bin/sh
set -e

if [ "${CLAMAV_ENABLED}" = "true" ] || [ "${CLAMAV_ENABLED}" = "1" ]; then
  echo "[entrypoint] Actualizando firmas ClamAV (puede tardar la primera vez)..."
  freshclam || true

  echo "[entrypoint] Iniciando clamd..."
  clamd &
  sleep 3
fi

echo "[entrypoint] Iniciando FastAPI..."
exec uvicorn app.main:app --host 0.0.0.0 --port 8000
