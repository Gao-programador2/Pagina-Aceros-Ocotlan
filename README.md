# Aceros Ocotlán — Un mundo de acero

Sitio web corporativo para distribución de acero y materiales industriales: catálogo de productos, sucursales, historia, blog técnico y formulario de cotización.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (plugin `@tailwindcss/vite`)
- react-router-dom v7
- lucide-react (iconos)
- pnpm como gestor de paquetes

## Comandos

```bash
pnpm install     # instalar dependencias
pnpm dev         # servidor de desarrollo
pnpm build       # build de producción
pnpm preview     # previsualizar el build
```

## Despliegue (importante para rutas)

El sitio usa React Router (`BrowserRouter`). Al refrescar una URL profunda
(ej. `/categoria-producto/productos/planos/lamina-antiderrapante`) el servidor
debe devolver `index.html`; si no, aparece 404.

Tras `pnpm build`, `dist/` incluye:

- `.htaccess` → Apache / LiteSpeed
- `web.config` → IIS (usa `httpErrors`, **no** requiere instalar URL Rewrite)

Si el `web.config` de IIS devolviera error 500 (hosting muy restringido),
bórralo del servidor y avisa: habría que pedir al administrador habilitar
errores HTTP personalizados, o usar la alternativa con URL Rewrite
(`web.config.iis-example`).

Si usan **Nginx**:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Arquitectura

```
src/
├── assets/                 # Logotipos, imágenes de productos y banners
├── components/
│   ├── common/             # Boton, TarjetaProducto (reutilizables)
│   └── layout/             # Navbar.jsx, Footer.jsx
├── layouts/                # MainLayout.jsx (Navbar + Outlet + Footer)
├── pages/
│   ├── Home/               # HomePage, HeroBanner, ResumenDeProductos, SeccionNosotros
│   ├── Products/           # ProductsPage, Filtros, GridDeProductos, productosData
│   ├── Branches/           # BranchesPage (sucursales)
│   ├── History/            # HistoryPage (quiénes somos)
│   ├── Blog/               # BlogPage (artículos técnicos)
│   └── Contact/            # ContactPage (formulario de cotización)
├── routes/                 # AppRoutes.jsx
├── App.jsx
└── main.jsx
```

## Rutas

| Ruta          | Página                    |
| ------------- | ------------------------- |
| `/`           | Inicio                    |
| `/productos`  | Catálogo de productos     |
| `/sucursales` | Sucursales                |
| `/historia`   | Quiénes somos / Historia  |
| `/blog`       | Blog técnico              |
| `/contacto`   | Cotización y contacto     |

## Paleta de colores

Definida en `src/index.css` con `@theme` de Tailwind v4:

- `steel-*`: grises azulados (fondos oscuros, superficies, texto)
- `accent-*`: naranja industrial (botones y llamadas a la acción)
