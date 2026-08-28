# Despliegue — Aceros Ocotlán (Docker + IIS en Windows)

## Arquitectura

```
Internet → IIS (Windows, HTTPS) → Docker web:8080 (nginx + SPA)
                                      ↓ proxy /api
                                 Docker api:8000 (FastAPI + ClamAV)
```

- **web**: React compilado + nginx (proxy `/api` y `/health` al backend).
- **api**: FastAPI, SMTP, reCAPTCHA, validación PDF/JPG y ClamAV.

---

## 1. Requisitos en el servidor Windows

1. **Docker Desktop** (modo Linux containers).
2. **Git**.
3. **IIS** con:
   - [URL Rewrite](https://www.iis.net/downloads/microsoft/url-rewrite)
   - [Application Request Routing (ARR)](https://www.iis.net/downloads/microsoft/application-request-routing) — habilitar **Proxy** en Server Proxy Settings.

---

## 2. Clonar y configurar

```powershell
cd C:\inetpub\Pagina-Aceros-Ocotlan
git clone https://github.com/Gao-programador2/Pagina-Aceros-Ocotlan.git .
git pull origin main
```

### `fastapi/.env` (obligatorio)

```powershell
copy fastapi\.env.example fastapi\.env
notepad fastapi\.env
```

Completa al menos:

| Variable | Ejemplo |
|---|---|
| `SMTP_HOST` | `smtp.hornet.email` |
| `SMTP_USER` / `SMTP_PASSWORD` / `SMTP_FROM` | cuenta de correo |
| `CORREOS_IRREGULARIDADES` | correos destino |
| `CORREOS_FRAUDES` | correo destino |
| `CORREOS_CONTACTO` | correo destino |
| `RECAPTCHA_SECRET_KEY` | clave secreta reCAPTCHA |
| `CORS_ORIGINS` | `https://acerosocotlan.mx,https://www.acerosocotlan.mx` |
| `TRUSTED_HOSTS` | `acerosocotlan.mx,www.acerosocotlan.mx,localhost,127.0.0.1` |
| `CLAMAV_ENABLED` | `true` (ya activo en Docker) |

### `.env.docker` (Docker Compose)

```powershell
copy .env.docker.example .env.docker
notepad .env.docker
```

| Variable | Local (dev) | Producción (hosting) |
|---|---|---|
| `WEB_PORT` | `8080` o `8081` si 8080 está ocupado | `8080` (IIS apunta aquí) |
| `CLAMAV_ENABLED` | `false` (arranque más rápido) | **`true`** (antivirus en adjuntos) |
| `VITE_GA_MEASUREMENT_ID` | opcional | ID de Analytics |
| `VITE_RECAPTCHA_SITE_KEY` | clave pública reCAPTCHA | misma clave del dominio |

> **ClamAV en producción:** pon `CLAMAV_ENABLED=true` en **`.env.docker`** y también `CLAMAV_ENABLED=true` en **`fastapi/.env`**. El contenedor `api` arranca `clamd` solo y escanea PDF/JPG de transparencia. Con `restart: unless-stopped` se levanta de nuevo si el servidor reinicia.

---

## 3. Levantar Docker

```powershell
.\iniciar-docker.ps1
```

O manualmente:

```powershell
docker compose --env-file .env.docker up -d --build
```

Primera vez con ClamAV: descarga firmas (~2–5 min). Ver logs:

```powershell
docker compose logs -f api
```

Comprobar:

- Sitio: `http://localhost:8080`
- API: `http://localhost:8080/health` → `{"status":"ok"}`

---

## 4. IIS como proxy (HTTPS)

1. Crea sitio IIS apuntando a una carpeta vacía (solo proxy).
2. Instala certificado SSL para `acerosocotlan.mx`.
3. Usa `deploy/iis-web.config` como base (proxy a `http://127.0.0.1:8080`).
4. En **ARR → Server Proxy Settings**: marcar **Enable proxy**.

El contenedor **web** escucha en el puerto `8080` del host (configurable con `WEB_PORT` en `.env.docker`).

---

## 5. Actualizar después de un `git pull`

```powershell
git pull origin main
docker compose --env-file .env.docker up -d --build
```

---

## 6. Prueba de formularios

Desde el servidor o tu PC:

```powershell
cd fastapi
docker compose exec api python scripts/test_formularios.py
```

(O ejecuta `scripts/test_formularios.py` localmente contra la API en producción.)

---

## 7. Solución de problemas

| Síntoma | Revisar |
|---|---|
| Formularios no envían | `docker compose logs api`, SMTP en `.env`, `/health` |
| reCAPTCHA falla | Dominio en Google reCAPTCHA admin + `VITE_RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY` |
| Adjuntos rechazados | Solo PDF/JPG; logs ClamAV: `docker compose logs api` |
| 502 en IIS | Docker corriendo, puerto 8080, ARR proxy ON |
| ClamAV lento al inicio | Normal la 1.ª vez (`freshclam`); esperar `healthy` en `docker compose ps` |
| ClamAV no escanea | `CLAMAV_ENABLED=true` en `.env.docker` y `fastapi/.env`; `docker compose logs api` debe mostrar `[entrypoint] Iniciando clamd...` |

---

## 8. ClamAV activo (checklist producción)

1. En **`.env.docker`**: `CLAMAV_ENABLED=true`
2. En **`fastapi/.env`**: `CLAMAV_ENABLED=true`
3. Levantar: `docker compose --env-file .env.docker up -d --build`
4. Verificar logs: `docker compose logs api` → debe aparecer `Iniciando clamd...`
5. El contenedor debe quedar **healthy** (`docker compose ps`)
6. Tras reinicio del servidor Windows, Docker Desktop debe iniciar solo; los contenedores vuelven con `unless-stopped`

Actualizar firmas (opcional, mensual):

```powershell
docker compose exec api freshclam
docker compose restart api
```

---

## 9. Puertos

| Servicio | Puerto host | Uso |
|---|---|---|
| web (nginx) | 8080 | IIS proxy → aquí |
| api (FastAPI) | solo red Docker | no exponer a internet |
