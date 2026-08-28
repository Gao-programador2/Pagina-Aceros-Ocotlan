# Aceros Ocotlan — levantar sitio completo en Docker (local o servidor)
Set-Location $PSScriptRoot

if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
    Write-Host "Docker no esta instalado. Instala Docker Desktop:" -ForegroundColor Red
    Write-Host "  https://www.docker.com/products/docker-desktop/" -ForegroundColor Yellow
    exit 1
}

docker info *> $null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Docker Desktop no esta corriendo. Abrelo y espera a que diga 'Running'." -ForegroundColor Red
    exit 1
}

if (-not (Test-Path "fastapi\.env")) {
    Copy-Item "fastapi\.env.example" "fastapi\.env"
    Write-Host "Se creo fastapi\.env — revisa SMTP y correos antes de produccion." -ForegroundColor Yellow
}

if (-not (Test-Path ".env.docker")) {
    Copy-Item ".env.docker.example" ".env.docker"
}

Write-Host "Construyendo e iniciando contenedores (1ra vez puede tardar varios minutos)..." -ForegroundColor Cyan
docker compose --env-file .env.docker up -d --build

if ($LASTEXITCODE -eq 0) {
    $port = "8080"
    if (Test-Path ".env.docker") {
        $match = Select-String -Path ".env.docker" -Pattern "^WEB_PORT=(.+)$" | Select-Object -First 1
        if ($match) { $port = $match.Matches[0].Groups[1].Value.Trim() }
    }
    Write-Host ""
    Write-Host "Listo. Abre en el navegador:" -ForegroundColor Green
    Write-Host "  http://localhost:$port" -ForegroundColor White
    Write-Host "  http://localhost:$port/health" -ForegroundColor White
    Write-Host ""
    Write-Host "Ver logs:  docker compose logs -f" -ForegroundColor Gray
    Write-Host "Detener:   docker compose down" -ForegroundColor Gray
} else {
    Write-Host ""
    Write-Host "Fallo el arranque. Revisa:" -ForegroundColor Red
    Write-Host "  docker compose logs api" -ForegroundColor Yellow
    Write-Host "  docker compose logs web" -ForegroundColor Yellow
}
