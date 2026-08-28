FROM python:3.11-slim-bookworm

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    CLAMAV_ENABLED=true

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
      clamav \
      clamav-daemon \
      clamav-freshclam \
    && rm -rf /var/lib/apt/lists/* \
    && mkdir -p /var/run/clamav /var/log/clamav \
    && chown -R clamav:clamav /var/run/clamav /var/log/clamav

# clamd escucha en TCP para pyclamd dentro del mismo contenedor
RUN printf '\nTCPSocket 3310\nTCPAddr 127.0.0.1\n' >> /etc/clamav/clamd.conf

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app ./app
COPY assets ./assets
COPY scripts ./scripts
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN sed -i 's/\r$//' /docker-entrypoint.sh && chmod +x /docker-entrypoint.sh

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=10s --start-period=90s --retries=3 \
  CMD python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:8000/health')"

ENTRYPOINT ["/docker-entrypoint.sh"]
