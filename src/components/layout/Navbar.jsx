import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import logoAcerosOcotlan from '../../assets/AO_Logo.png';

const NAV_LINKS = [
  { to: '/blog', label: 'Blog' },
  { ancla: 'productos', label: 'Productos' },
  { ancla: 'servicios', label: 'Servicios' },
  { to: '/historia', label: 'Historia' },
  { to: '/bolsa-de-trabajo', label: 'Bolsa de Trabajo' },
  { ancla: 'sucursales', label: 'Sucursales' },
  { ancla: 'contacto', label: 'Contacto' },
  { to: '/transparencia-ao/', label: 'Transparencia' },
];

const LINK_CLASSES =
  'relative pb-1 transition-colors after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-white after:transition-all after:duration-300 hover:after:w-full';

function EnlaceAncla({ id, label, className, onClick }) {
  const { pathname } = useLocation();

  const irASeccion = (evento) => {
    onClick?.();
    if (pathname !== '/') return;

    const seccion = document.getElementById(id);
    if (!seccion) return;

    evento.preventDefault();
    seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', `#${id}`);
  };

  return (
    <Link to={{ pathname: '/', hash: `#${id}` }} onClick={irASeccion} className={className}>
      {label}
    </Link>
  );
}

function EnlaceNav({ link, className, onClick }) {
  if (link.to) {
    return (
      <Link to={link.to} onClick={onClick} className={className}>
        {link.label}
      </Link>
    );
  }

  return (
    <EnlaceAncla id={link.ancla} label={link.label} className={className} onClick={onClick} />
  );
}

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="sticky top-0 z-[100] w-full bg-transparent">
      {/* Gradiente azul translúcido */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#1b2c4d]/90 via-[#3d5175]/35 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-2">
        {/* ===== MÓVIL ===== */}
        <div className="relative flex flex-col gap-3 lg:hidden">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex-shrink-0">
              <img
                src={logoAcerosOcotlan}
                alt="Aceros Ocotlán"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={() => setMenuAbierto((prev) => !prev)}
              className="text-white"
              aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuAbierto}
            >
              {menuAbierto ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <input
              type="search"
              name="s"
              placeholder="¿Buscas algún producto o servicio?"
              className="w-full rounded-md border border-white/40 bg-[#3d5a8a]/55 py-2.5 pl-4 pr-14 text-sm text-white placeholder-white/90 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#2a5db8]"
              autoComplete="off"
            />
            <button
              type="submit"
              className="absolute bottom-0 right-0 top-0 flex w-12 items-center justify-center rounded-r-md bg-[#2a4a8c] text-white transition-colors hover:bg-[#3458a0]"
              aria-label="Buscar"
            >
              <Search className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </form>

          {/* Overlay: no ocupa espacio en el flujo, no empuja el banner */}
          {menuAbierto && (
            <nav className="absolute left-0 right-0 top-full z-[60] mt-2 flex flex-col gap-1 rounded-lg bg-[#1b2c4d]/95 px-3 py-3 text-white shadow-lg backdrop-blur-sm">
              {NAV_LINKS.map((link) => (
                <EnlaceNav
                  key={link.label}
                  link={link}
                  onClick={cerrarMenu}
                  className="rounded-md px-3 py-2.5 text-sm font-semibold hover:bg-white/10"
                />
              ))}
            </nav>
          )}
        </div>

        {/* ===== ESCRITORIO ===== */}
        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={logoAcerosOcotlan}
                alt="Aceros Ocotlán"
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="flex flex-1 flex-col gap-2.5">
            <nav className="flex items-center justify-center gap-7 text-md font-semibold text-white">
              {NAV_LINKS.map((link) => (
                <EnlaceNav key={link.label} link={link} className={LINK_CLASSES} />
              ))}
            </nav>

            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <input
                type="search"
                name="s"
                placeholder="¿Buscas algún producto o servicio?"
                className="w-full rounded-md border border-white/50 bg-[#8fa6c9]/60 py-2.5 pl-4 pr-14 text-sm text-white placeholder-white/90 shadow-inner transition-all focus:outline-none focus:ring-2 focus:ring-[#2a5db8]"
                autoComplete="off"
              />
              <button
                type="submit"
                className="absolute bottom-1 right-1 top-1 flex w-11 items-center justify-center rounded-md bg-white text-[#123a7d] shadow transition-colors hover:bg-blue-50"
                aria-label="Buscar"
              >
                <Search className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
