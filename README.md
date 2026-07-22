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
