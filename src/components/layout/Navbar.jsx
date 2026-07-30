import { useEffect, useId, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import logoAcerosOcotlan from '../../assets/AO_Logo.png';
import { buscarEnCatalogo, etiquetaTipo } from '../../data/catalogoBusqueda.js';

const NAV_LINKS = [
  { to: '/blog', label: 'Blog' },
  { to: '/productos', label: 'Productos' },
  { to: '/servicios', label: 'Servicios' },
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

/**
 * Campo de búsqueda del navbar (móvil / escritorio).
 */
function CampoBusqueda({ variante = 'escritorio', onBuscar }) {
  const navigate = useNavigate();
  const contenedorRef = useRef(null);
  const inputId = useId();
  const [consulta, setConsulta] = useState('');
  const [abierto, setAbierto] = useState(false);
  const [activo, setActivo] = useState(-1);

  const sugerencias = consulta.trim().length >= 2 ? buscarEnCatalogo(consulta, { limite: 8 }) : [];

  useEffect(() => {
    const cerrar = (evento) => {
      if (!contenedorRef.current?.contains(evento.target)) {
        setAbierto(false);
        setActivo(-1);
      }
    };
    document.addEventListener('mousedown', cerrar);
    return () => document.removeEventListener('mousedown', cerrar);
  }, []);

  const irAResultados = (texto) => {
    const q = (texto ?? consulta).trim();
    if (q.length < 2) return;
    setAbierto(false);
    setActivo(-1);
    onBuscar?.();
    navigate(`/buscar?q=${encodeURIComponent(q)}`);
  };

  const irAItem = (item) => {
    setAbierto(false);
    setActivo(-1);
    setConsulta('');
    onBuscar?.();
    // Sucursales: ir a resultados internos (no abrir Google Maps en automático).
    if (item.tipo === 'sucursal') {
      navigate(`/buscar?q=${encodeURIComponent(item.titulo)}`);
      return;
    }
    navigate(item.to);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (activo >= 0 && sugerencias[activo]) {
      irAItem(sugerencias[activo]);
      return;
    }
    irAResultados();
  };

  const onKeyDown = (e) => {
    if (!abierto || sugerencias.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActivo((i) => (i + 1) % sugerencias.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActivo((i) => (i <= 0 ? sugerencias.length - 1 : i - 1));
    } else if (e.key === 'Escape') {
      setAbierto(false);
      setActivo(-1);
    }
  };

  const inputClases =
    variante === 'movil'
      ? 'w-full rounded-md border border-white/40 bg-[#3d5a8a]/55 py-2.5 pl-4 pr-14 text-sm text-white placeholder-white/90 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#2a5db8]'
      : 'w-full rounded-md border border-white/50 bg-[#8fa6c9]/60 py-2.5 pl-4 pr-14 text-sm text-white placeholder-white/90 shadow-inner transition-all focus:outline-none focus:ring-2 focus:ring-[#2a5db8]';

  const botonClases =
    variante === 'movil'
      ? 'absolute bottom-0 right-0 top-0 flex w-12 items-center justify-center rounded-r-md bg-[#2a4a8c] text-white transition-colors hover:bg-[#3458a0]'
      : 'absolute bottom-1 right-1 top-1 flex w-11 items-center justify-center rounded-md bg-white text-[#123a7d] shadow transition-colors hover:bg-blue-50';

  return (
    <div ref={contenedorRef} className="relative w-full">
      <form onSubmit={onSubmit} className="relative flex items-center" role="search">
        <input
          id={inputId}
          type="search"
          name="q"
          value={consulta}
          onChange={(e) => {
            setConsulta(e.target.value);
            setAbierto(true);
            setActivo(-1);
          }}
          onFocus={() => setAbierto(true)}
          onKeyDown={onKeyDown}
          placeholder="¿Buscas algún producto, servicio o sucursal?"
          aria-label="Buscar producto, servicio o sucursal"
          aria-autocomplete="list"
          aria-controls={`${inputId}-lista`}
          aria-expanded={abierto && sugerencias.length > 0}
          className={inputClases}
          autoComplete="off"
        />
        <button type="submit" className={botonClases} aria-label="Buscar">
          <Search className="h-4 w-4" strokeWidth={2.5} />
        </button>
      </form>

      {abierto && consulta.trim().length >= 2 && (
        <div
          id={`${inputId}-lista`}
          role="listbox"
          className="absolute left-0 right-0 top-full z-[120] mt-1.5 max-h-80 overflow-y-auto rounded-lg border border-steel-200 bg-white py-1 shadow-xl"
        >
          {sugerencias.length === 0 ? (
            <p className="px-3 py-2.5 text-left text-sm text-steel-500">Sin coincidencias</p>
          ) : (
            <>
              {sugerencias.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="option"
                  aria-selected={index === activo}
                  onMouseEnter={() => setActivo(index)}
                  onClick={() => irAItem(item)}
                  className={`flex w-full flex-col gap-0.5 px-3 py-2.5 text-left transition-colors ${
                    index === activo ? 'bg-[#0d47a1]/10' : 'hover:bg-steel-50'
                  }`}
                >
                  <span className="text-sm font-medium text-steel-900">{item.titulo}</span>
                  <span className="text-xs text-steel-500">
                    {etiquetaTipo(item.tipo)}
                    {item.descripcion ? ` · ${item.descripcion}` : ''}
                  </span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => irAResultados()}
                className="w-full border-t border-steel-100 px-3 py-2.5 text-left text-sm font-medium text-[#0d47a1] hover:bg-steel-50"
              >
                Ver todos los resultados
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="sticky top-0 z-[100] w-full bg-transparent">
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
                loading="eager"
                decoding="async"
                fetchPriority="high"
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

          <CampoBusqueda variante="movil" onBuscar={cerrarMenu} />

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
                loading="eager"
                decoding="async"
                fetchPriority="high"
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

            <CampoBusqueda variante="escritorio" />
          </div>
        </div>
      </div>
    </header>
  );
}
