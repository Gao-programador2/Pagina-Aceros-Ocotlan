import { SUCURSALES_MAPA } from './sucursalesMapa.js';
import {
  RUTA_COMERCIALES,
  RUTA_CORRUGADOS,
  RUTA_ESTRUCTURALES,
  RUTA_GALVANIZADOS,
  RUTA_PLANOS,
  RUTA_PRODUCTOS,
  RUTA_TUBULARES,
} from '../pages/Products/TituloRutaProductos.jsx';
import {
  PRODUCTOS_COMERCIALES,
  rutaProductoComercial,
} from '../pages/Products/comercialesData.js';
import {
  PRODUCTOS_CORRUGADOS,
  rutaProductoCorrugado,
} from '../pages/Products/corrugadosData.js';
import {
  PRODUCTOS_ESTRUCTURALES,
  rutaProductoEstructural,
} from '../pages/Products/estructuralesData.js';
import {
  PRODUCTOS_GALVANIZADOS,
  rutaProductoGalvanizado,
} from '../pages/Products/galvanizadosData.js';
import { PRODUCTOS_PLANOS, rutaProductoPlano } from '../pages/Products/planosData.js';
import {
  PRODUCTOS_TUBULARES,
  rutaProductoTubular,
} from '../pages/Products/tubularesData.js';
import { RUTA_SERVICIOS, SERVICIOS as LISTA_SERVICIOS } from '../pages/Services/serviciosData.js';

/**
 * Catálogo unificado para el buscador.
 * Productos y servicios se generan desde los *Data.js del sitio:
 * si agregas un ítem ahí (con slug/to), aparece en el buscador sin editar este archivo.
 *
 * Solo SECCIONES (páginas sueltas) y palabrasClave extra opcionales se mantienen aquí.
 */

/** @typedef {'producto' | 'servicio' | 'sucursal' | 'seccion'} TipoResultado */
/** @typedef {{ id: string, tipo: TipoResultado, titulo: string, descripcion?: string, to: string, mapsUrl?: string, telefono?: string, palabrasClave?: string[] }} ItemBusqueda */

/**
 * Categorías de producto alimentadas por sus archivos de datos.
 * Al crear una categoría nueva: agrégala aquí una sola vez apuntando a su *Data.js.
 */
const CATEGORIAS_PRODUCTO = [
  {
    id: 'planos',
    titulo: 'Planos',
    descripcion: 'Lámina y placas planas',
    to: RUTA_PLANOS,
    productos: PRODUCTOS_PLANOS,
    rutaProducto: rutaProductoPlano,
    palabrasClave: ['lamina', 'placa', 'plana', 'antiderrapante'],
  },
  {
    id: 'tubulares',
    titulo: 'Perfiles tubulares y Tuberías',
    descripcion: 'Tubos y perfiles tubulares',
    to: RUTA_TUBULARES,
    productos: PRODUCTOS_TUBULARES,
    rutaProducto: rutaProductoTubular,
    palabrasClave: ['tubo', 'tuberia', 'ptr', 'cedula'],
  },
  {
    id: 'estructurales',
    titulo: 'Estructurales',
    descripcion: 'Perfiles estructurales',
    to: RUTA_ESTRUCTURALES,
    productos: PRODUCTOS_ESTRUCTURALES,
    rutaProducto: rutaProductoEstructural,
    palabrasClave: ['viga', 'canal', 'ipr', 'ips', 'hss'],
  },
  {
    id: 'comerciales',
    titulo: 'Comerciales',
    descripcion: 'Productos comerciales de acero',
    to: RUTA_COMERCIALES,
    productos: PRODUCTOS_COMERCIALES,
    rutaProducto: rutaProductoComercial,
    palabrasClave: ['comercial', 'solera', 'polin'],
  },
  {
    id: 'galvanizados',
    titulo: 'Galvanizados',
    descripcion: 'Clavos, grapas y artículos galvanizados',
    to: RUTA_GALVANIZADOS,
    productos: PRODUCTOS_GALVANIZADOS,
    rutaProducto: rutaProductoGalvanizado,
    palabrasClave: ['galvanizado', 'clavo', 'grapa', 'zinc'],
  },
  {
    id: 'corrugados',
    titulo: 'Corrugados y Trefilados',
    descripcion: 'Alambres corrugados y trefilados',
    to: RUTA_CORRUGADOS,
    productos: PRODUCTOS_CORRUGADOS,
    rutaProducto: rutaProductoCorrugado,
    palabrasClave: ['corrugado', 'trefilado', 'varilla', 'alambre', 'malla'],
  },
];

/** Páginas / secciones que no viven en un *Data.js de catálogo. */
/** @type {ItemBusqueda[]} */
const SECCIONES = [
  {
    id: 'sec-productos',
    tipo: 'seccion',
    titulo: 'Productos',
    descripcion: 'Catálogo de productos',
    to: RUTA_PRODUCTOS,
  },
  {
    id: 'sec-servicios',
    tipo: 'seccion',
    titulo: 'Servicios',
    descripcion: 'Servicios de centro de servicio',
    to: RUTA_SERVICIOS,
  },
  {
    id: 'sec-sucursales',
    tipo: 'seccion',
    titulo: 'Sucursales',
    descripcion: 'Mapa y listado de sucursales',
    to: '/sucursales',
    palabrasClave: ['tienda', 'punto de venta', 'ubicacion', 'mapa'],
  },
  {
    id: 'sec-contacto',
    tipo: 'seccion',
    titulo: 'Contacto',
    descripcion: 'Formulario de contacto',
    to: '/contacto',
  },
  {
    id: 'sec-obras',
    tipo: 'seccion',
    titulo: 'Obras construidas',
    descripcion: 'Proyectos construidos con Aceros Ocotlán',
    to: '/',
    palabrasClave: ['obras', 'proyectos', 'construccion', 'arena'],
  },
  {
    id: 'sec-historia',
    tipo: 'seccion',
    titulo: 'Historia',
    descripcion: 'Nuestra historia',
    to: '/historia',
  },
  {
    id: 'sec-blog',
    tipo: 'seccion',
    titulo: 'Blog',
    descripcion: 'Noticias y artículos',
    to: '/blog',
  },
  {
    id: 'sec-bolsa',
    tipo: 'seccion',
    titulo: 'Bolsa de Trabajo',
    descripcion: 'Vacantes y oportunidades',
    to: '/bolsa-de-trabajo',
    palabrasClave: ['empleo', 'vacante', 'trabajo'],
  },
  {
    id: 'sec-transparencia',
    tipo: 'seccion',
    titulo: 'Transparencia',
    descripcion: 'Denuncias y transparencia',
    to: '/transparencia-ao/',
    palabrasClave: ['denuncia', 'etica', 'fraude', 'irregularidad'],
  },
  {
    id: 'sec-irregularidades',
    tipo: 'seccion',
    titulo: 'Irregularidades',
    descripcion: 'Transparencia · Irregularidades, abusos o mal servicio',
    to: '/transparencia-ao/irregularidades',
    palabrasClave: ['denuncia', 'abuso', 'mal servicio', 'queja'],
  },
  {
    id: 'sec-fraudes',
    tipo: 'seccion',
    titulo: 'Fraudes',
    descripcion: 'Transparencia · Fraudes',
    to: '/transparencia-ao/fraudes',
    palabrasClave: ['fraude', 'estafa', 'redes falsas'],
  },
  {
    id: 'sec-terminos',
    tipo: 'seccion',
    titulo: 'Términos y condiciones',
    descripcion: 'Aviso de privacidad y términos',
    to: '/terminos-y-condiciones',
    palabrasClave: ['privacidad', 'datos personales', 'arco', 'aviso'],
  },
  {
    id: 'sec-aviso-privacidad',
    tipo: 'seccion',
    titulo: 'Aviso de Privacidad',
    descripcion: 'Protección de datos personales',
    to: '/aviso-de-privacidad',
    palabrasClave: ['privacidad', 'datos personales', 'arco'],
  },
];

/**
 * @param {string} texto
 */
function slugId(texto) {
  return String(texto ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-|-$/g, '');
}

/**
 * @param {{
 *   id: string,
 *   titulo: string,
 *   descripcion: string,
 *   to: string,
 *   productos: Array<{ slug?: string, nombre: string, to?: string, palabrasClave?: string[] }>,
 *   rutaProducto?: (producto: any) => string,
 *   palabrasClave?: string[],
 * }} categoria
 * @returns {ItemBusqueda[]}
 */
function itemsDesdeCategoria(categoria) {
  /** @type {ItemBusqueda[]} */
  const items = [
    {
      id: `prod-cat-${categoria.id}`,
      tipo: 'producto',
      titulo: categoria.titulo,
      descripcion: categoria.descripcion,
      to: categoria.to,
      palabrasClave: categoria.palabrasClave,
    },
  ];

  for (const producto of categoria.productos) {
    const slug = producto.slug ?? slugId(producto.nombre);
    const to =
      producto.to ??
      (categoria.rutaProducto ? categoria.rutaProducto(slug) : categoria.to);

    items.push({
      id: `prod-${categoria.id}-${slug}`,
      tipo: 'producto',
      titulo: producto.nombre,
      descripcion: `${categoria.titulo} · ${producto.nombre}`,
      to,
      palabrasClave: [
        ...(producto.palabrasClave ?? []),
        producto.nombre,
        slug.replace(/-/g, ' '),
        categoria.titulo,
      ],
    });
  }

  return items;
}

/** @type {ItemBusqueda[]} */
const PRODUCTOS = CATEGORIAS_PRODUCTO.flatMap(itemsDesdeCategoria);

/** @type {ItemBusqueda[]} */
const SERVICIOS = [
  {
    id: 'srv-cat-servicios',
    tipo: 'servicio',
    titulo: 'Servicios',
    descripcion: 'Centro de servicio',
    to: RUTA_SERVICIOS,
    palabrasClave: ['servicio', 'corte', 'nivelado'],
  },
  ...LISTA_SERVICIOS.map((servicio) => ({
    id: `srv-${slugId(servicio.nombre)}`,
    tipo: /** @type {const} */ ('servicio'),
    titulo: servicio.nombre,
    descripcion: `Servicios · ${servicio.nombre}`,
    to: servicio.to,
    palabrasClave: [servicio.nombre, ...(servicio.palabrasClave ?? [])],
  })),
];

/** @type {ItemBusqueda[]} */
const SUCURSALES = SUCURSALES_MAPA.map((s) => {
  const titulo = s.nombre.replace(/^Aceros Ocotlán\s*-\s*/i, '').trim() || s.nombre;
  return {
    id: `suc-${s.id}`,
    tipo: /** @type {const} */ ('sucursal'),
    titulo,
    descripcion: s.direccion,
    to: `/buscar?q=${encodeURIComponent(titulo)}`,
    mapsUrl: s.enlace,
    telefono: s.telefono,
    palabrasClave: [s.nombre, s.direccion, s.id.replace(/-/g, ' ')],
  };
});

/** @type {ItemBusqueda[]} */
export const CATALOGO_BUSQUEDA = [...PRODUCTOS, ...SERVICIOS, ...SECCIONES, ...SUCURSALES];

const ETIQUETA_TIPO = {
  producto: 'Producto',
  servicio: 'Servicio',
  sucursal: 'Sucursal',
  seccion: 'Sección',
};

export function etiquetaTipo(tipo) {
  return ETIQUETA_TIPO[tipo] ?? 'Resultado';
}

function normalizar(texto) {
  return String(texto ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Busca en el catálogo. Devuelve coincidencias ordenadas por relevancia.
 * @param {string} consulta
 * @param {{ limite?: number }} [opciones]
 * @returns {ItemBusqueda[]}
 */
export function buscarEnCatalogo(consulta, { limite = 40 } = {}) {
  const q = normalizar(consulta);
  if (q.length < 2) return [];

  const tokens = q.split(' ').filter(Boolean);
  const puntuados = [];

  for (const item of CATALOGO_BUSQUEDA) {
    const titulo = normalizar(item.titulo);
    const descripcion = normalizar(item.descripcion);
    const claves = normalizar((item.palabrasClave ?? []).join(' '));
    const haystack = `${titulo} ${descripcion} ${claves}`;

    let score = 0;

    if (titulo === q) score += 100;
    else if (titulo.startsWith(q)) score += 70;
    else if (titulo.includes(q)) score += 45;

    if (claves.includes(q)) score += 35;
    if (descripcion.includes(q)) score += 20;

    const tokensOk = tokens.every((t) => haystack.includes(t));
    if (tokens.length > 1 && tokensOk) score += 25;
    else if (!tokensOk && !haystack.includes(q)) continue;

    if (item.tipo === 'producto' || item.tipo === 'servicio') score += 5;
    if (item.tipo === 'seccion') score += 3;

    if (score > 0) puntuados.push({ item, score });
  }

  puntuados.sort((a, b) => b.score - a.score || a.item.titulo.localeCompare(b.item.titulo, 'es'));

  return puntuados.slice(0, limite).map((p) => p.item);
}
