import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const CAMPO =
  'w-full rounded-sm border border-steel-300 bg-white px-4 py-2.5 text-sm text-steel-900 placeholder-steel-400 focus:border-accent-500 focus:outline-none';

function ContactPage() {
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    // TODO: conectar con el backend o servicio de correo
    setEnviado(true);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-600">
        Contacto
      </p>
      <h1 className="mt-2 text-3xl font-bold text-steel-900 sm:text-4xl">
        Solicita tu cotización
      </h1>
      <p className="mt-4 max-w-2xl text-steel-600">
        Envíanos tu lista de materiales y un asesor te contactará el mismo día hábil con precios y
        disponibilidad.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        {/* Formulario */}
        <form
          onSubmit={manejarEnvio}
          className="rounded-sm border border-steel-200 bg-white p-8 lg:col-span-2"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-steel-700">
                Nombre completo *
              </label>
              <input id="nombre" name="nombre" type="text" required className={CAMPO} placeholder="Tu nombre" />
            </div>
            <div>
              <label htmlFor="empresa" className="mb-1.5 block text-sm font-medium text-steel-700">
                Empresa
              </label>
              <input id="empresa" name="empresa" type="text" className={CAMPO} placeholder="Nombre de tu empresa" />
            </div>
            <div>
              <label htmlFor="correo" className="mb-1.5 block text-sm font-medium text-steel-700">
                Correo electrónico *
              </label>
              <input id="correo" name="correo" type="email" required className={CAMPO} placeholder="correo@empresa.com" />
            </div>
            <div>
              <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium text-steel-700">
                Teléfono *
              </label>
              <input id="telefono" name="telefono" type="tel" required className={CAMPO} placeholder="(00) 0000 0000" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-steel-700">
                Materiales a cotizar *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}
                className={CAMPO}
                placeholder="Ejemplo: 20 varillas de 3/8, 5 hojas de lámina calibre 14..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-accent-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-600"
          >
            Enviar solicitud
            <Send size={16} />
          </button>

          {enviado && (
            <p className="mt-4 rounded-sm bg-green-50 px-4 py-3 text-sm text-green-700">
              Solicitud enviada. Un asesor te contactará a la brevedad.
            </p>
          )}
        </form>

        {/* Datos de contacto */}
        <aside className="space-y-6">
          <div className="rounded-sm bg-steel-900 p-6 text-white">
            <h2 className="text-sm font-semibold uppercase tracking-widest">Atención directa</h2>
            <ul className="mt-4 space-y-4 text-sm text-steel-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent-400" />
                Av. Industrial 1234, Parque Industrial, México
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-accent-400" />
                (81) 0000 0000
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-accent-400" />
                ventas@aceroindustrial.com
              </li>
            </ul>
          </div>
          <div className="rounded-sm border border-steel-200 bg-white p-6 text-sm text-steel-600">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-steel-900">
              Horario de atención
            </h2>
            <p className="mt-3">Lunes a Viernes: 8:00 - 18:00</p>
            <p>Sábado: 8:00 - 13:00</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default ContactPage;
