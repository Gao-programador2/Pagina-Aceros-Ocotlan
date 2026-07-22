import { MapPin, Phone, Clock } from 'lucide-react';

const SUCURSALES = [
  {
    nombre: 'Matriz — Parque Industrial',
    direccion: 'Av. Industrial 1234, Parque Industrial, México',
    telefono: '(81) 0000 0001',
    horario: 'Lun - Vie: 8:00 - 18:00 | Sáb: 8:00 - 13:00',
  },
  {
    nombre: 'Sucursal Norte',
    direccion: 'Carretera Nacional Km 12, Zona Norte, México',
    telefono: '(81) 0000 0002',
    horario: 'Lun - Vie: 8:00 - 18:00 | Sáb: 8:00 - 13:00',
  },
  {
    nombre: 'Sucursal Centro',
    direccion: 'Blvd. Constitución 456, Centro, México',
    telefono: '(81) 0000 0003',
    horario: 'Lun - Vie: 8:00 - 18:00 | Sáb: 8:00 - 13:00',
  },
];

function BranchesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-600">
        Puntos de venta
      </p>
      <h1 className="mt-2 text-3xl font-bold text-steel-900 sm:text-4xl">Sucursales</h1>
      <p className="mt-4 max-w-2xl text-steel-600">
        Visítanos en cualquiera de nuestras sucursales o solicita entrega directa a tu obra o
        planta.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SUCURSALES.map((sucursal) => (
          <article
            key={sucursal.nombre}
            className="rounded-sm border border-steel-200 bg-white p-6"
          >
            <h2 className="text-lg font-semibold text-steel-900">{sucursal.nombre}</h2>
            <ul className="mt-4 space-y-3 text-sm text-steel-600">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent-500" />
                {sucursal.direccion}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-accent-500" />
                {sucursal.telefono}
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 shrink-0 text-accent-500" />
                {sucursal.horario}
              </li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BranchesPage;
