import { useState } from 'react';
import Filtros from './Filtros.jsx';
import GridDeProductos from './GridDeProductos.jsx';
import { CATEGORIAS, PRODUCTOS } from './productosData.js';

function ProductsPage() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  const productosFiltrados =
    categoriaActiva === 'Todos'
      ? PRODUCTOS
      : PRODUCTOS.filter((producto) => producto.categoria === categoriaActiva);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-600">
        Catálogo
      </p>
      <h1 className="mt-2 text-3xl font-bold text-steel-900 sm:text-4xl">
        Productos de acero y materiales
      </h1>
      <p className="mt-4 max-w-2xl text-steel-600">
        Explora nuestras líneas de producto. Todos los materiales cuentan con certificado de
        calidad y disponibilidad en sucursal o entrega a obra.
      </p>

      <div className="mt-10">
        <Filtros
          categorias={CATEGORIAS}
          categoriaActiva={categoriaActiva}
          onCambiarCategoria={setCategoriaActiva}
        />
      </div>

      <div className="mt-8">
        <GridDeProductos productos={productosFiltrados} />
      </div>
    </section>
  );
}

export default ProductsPage;
