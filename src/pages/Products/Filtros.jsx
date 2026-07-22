function Filtros({ categorias, categoriaActiva, onCambiarCategoria }) {
  return (
    <div className="flex flex-wrap gap-2">
      {['Todos', ...categorias].map((categoria) => {
        const activa = categoria === categoriaActiva;
        return (
          <button
            key={categoria}
            type="button"
            onClick={() => onCambiarCategoria(categoria)}
            className={[
              'rounded-sm px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors',
              activa
                ? 'bg-steel-900 text-white'
                : 'border border-steel-300 bg-white text-steel-600 hover:border-steel-500 hover:text-steel-900',
            ].join(' ')}
          >
            {categoria}
          </button>
        );
      })}
    </div>
  );
}

export default Filtros;
