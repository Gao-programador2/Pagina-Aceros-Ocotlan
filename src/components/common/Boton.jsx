import { Link } from 'react-router-dom';

const VARIANTES = {
  primario:
    'bg-accent-500 text-white hover:bg-accent-600',
  secundario:
    'border border-steel-400 text-steel-700 hover:border-steel-900 hover:text-steel-900',
  oscuro:
    'bg-steel-900 text-white hover:bg-steel-800',
};

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors';

/**
 * Botón corporativo reutilizable. Si recibe `to` se renderiza como Link
 * de react-router-dom; de lo contrario, como <button>.
 */
function Boton({ to, variante = 'primario', className = '', children, ...props }) {
  const clases = `${BASE} ${VARIANTES[variante]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={clases} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={clases} {...props}>
      {children}
    </button>
  );
}

export default Boton;
