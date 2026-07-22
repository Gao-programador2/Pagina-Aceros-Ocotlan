import TarjetaProducto from '../../components/common/TarjetaProducto.jsx';

function GridDeProductos({ productos }) {
  if (productos.length === 0) {
    return (
      <p className="rounded-sm border border-steel-200 bg-white p-8 text-center text-steel-500">
        No hay productos en esta categoría.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productos.map((producto) => (
        <TarjetaProducto
          key={producto.nombre}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          icono={producto.icono}
        />
      ))}
    </div>
  );
}

export default GridDeProductos;
