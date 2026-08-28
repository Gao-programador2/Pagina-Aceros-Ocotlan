# --- Etapa 1: build del front (React + Vite) ---
FROM node:22-bookworm-slim AS build

RUN corepack enable && corepack prepare pnpm@10.12.1 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY index.html vite.config.js ./
COPY plugins ./plugins
COPY public ./public
COPY src ./src

ARG VITE_API_URL=
ARG VITE_GA_MEASUREMENT_ID=
ARG VITE_RECAPTCHA_SITE_KEY=

ENV VITE_API_URL=$VITE_API_URL
ENV VITE_GA_MEASUREMENT_ID=$VITE_GA_MEASUREMENT_ID
ENV VITE_RECAPTCHA_SITE_KEY=$VITE_RECAPTCHA_SITE_KEY

RUN pnpm run build

# --- Etapa 2: nginx sirve el SPA y hace proxy a FastAPI ---
FROM nginx:1.27-alpine

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
