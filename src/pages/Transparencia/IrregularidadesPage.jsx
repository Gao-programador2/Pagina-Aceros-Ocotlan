import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, FilePlus2 } from 'lucide-react';
import { CORREOS_IRREGULARIDADES } from '../../config/transparenciaEnv.js';

const AZUL = '#1a4789';
const RUTA_TRANSPARENCIA = '/transparencia-ao/';

const AREAS = [
  '-',
  'Administración y Finanzas',
  'Auditoria',
  'Compras',
  'Credito y Cobranza',
  'Legal',
  'Operaciones',
  'Recursos Humanos',
  'Sistemas',
  'Tesorería',
  'Ventas',
];

const TIPOS_IRREGULARIDAD = [
  '-',
  'Daño Moral',
  'Daño Material',
  'Daño Económico',
  'Robo',
  'Acoso',
  'Incumplimiento de protocolos',
  'Mal servicio',
  'Otros',
];

const CAMPO =
  'w-full rounded-lg border border-[#c5cdd8] bg-white px-3 py-2.5 text-sm text-[#333] outline-none transition-shadow focus:border-[#1a4789] focus:ring-2 focus:ring-[#1a4789]/25';

/**
 * Formulario de denuncia por irregularidades, abusos o mal servicio.
 */
function IrregularidadesPage() {
  const navegar = useNavigate();
  const inputArchivoRef = useRef(null);
  const [enviado, setEnviado] = useState(false);
  const [archivos, setArchivos] = useState([]);
  const [formulario, setFormulario] = useState({
    tipoPersona: '',
    sucursal: '',
    puesto: '',
    nombresImplicados: '',
    area: '-',
    fechaSuceso: '',
    horaSuceso: '',
    tipoIrregularidad: '-',
    narracion: '',
    sugerencias: '',
    correo: '',
    telefono: '',
  });

  const actualizar = (campo) => (evento) => {
    setFormulario((prev) => ({ ...prev, [campo]: evento.target.value }));
  };

  const alSoltarArchivos = (evento) => {
    evento.preventDefault();
    const lista = Array.from(evento.dataTransfer?.files ?? []);
    if (lista.length) setArchivos((prev) => [...prev, ...lista]);
  };

  const alElegirArchivos = (evento) => {
    const lista = Array.from(evento.target.files ?? []);
    if (lista.length) setArchivos((prev) => [...prev, ...lista]);
  };

  const alEnviar = (evento) => {
    evento.preventDefault();
    const destinarios = CORREOS_IRREGULARIDADES;
    // TODO: enviar denuncia al backend con destinarios
    if (!destinarios.length) {
      console.warn(
        'Falta VITE_TRANSPARENCIA_IRREGULARIDADES_CORREOS en .env',
      );
    }
    setEnviado(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (enviado) {
    return (
      <section className="relative bg-[#f3f4f6] pb-12 pt-6 sm:pt-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl bg-white px-6 py-12 text-center shadow-sm sm:px-10">
            <h1 className="text-2xl font-bold sm:text-3xl" style={{ color: AZUL }}>
              Gracias por tu denuncia
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[#555] sm:text-base">
              Hemos recibido tu información. En Grupo Aceros Ocotlán trabajamos por la
              transparencia, la honestidad y el servicio.
            </p>
            <Link
              to={RUTA_TRANSPARENCIA}
              className="mt-8 inline-flex rounded-full bg-[#1a4789] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#163a70]"
            >
              Volver a Transparencia
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-[#f3f4f6] pb-12 pt-6 sm:pt-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-5 flex min-w-0 items-center gap-3 sm:mb-6 sm:gap-4">
          <button
            type="button"
            onClick={() => navegar(RUTA_TRANSPARENCIA)}
            aria-label="Regresar a Transparencia"
            className="-ml-1 flex h-10 w-10 shrink-0 items-center justify-center text-[#1a4789] transition-opacity hover:opacity-70"
          >
            <ChevronLeft size={32} strokeWidth={1.75} />
          </button>
          <h1
            className="flex-1 text-center text-2xl font-bold sm:text-3xl lg:text-4xl"
            style={{ color: AZUL }}
          >
            Irregularidades
          </h1>
          <span className="h-10 w-10 shrink-0" aria-hidden="true" />
        </div>

        <div className="mb-6 rounded-xl bg-[#8fa6c9] px-4 py-4 text-center sm:px-6">
          <p className="text-sm font-medium text-white sm:text-base">
            En Grupo Aceros Ocotlán trabajamos por la transparencia, la honestidad y el servicio.
          </p>
        </div>

        <form
          onSubmit={alEnviar}
          className="rounded-2xl bg-white px-4 py-6 shadow-sm sm:px-8 sm:py-8"
        >
          {/* Datos Generales */}
          <h2 className="text-lg font-bold sm:text-xl" style={{ color: AZUL }}>
            Datos Generales
          </h2>
          <fieldset className="mt-4">
            <legend className="text-sm font-medium text-[#333]">Usted es:</legend>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:gap-8">
              {[
                { value: 'colaborador', label: 'Colaborador de GAO' },
                { value: 'cliente-proveedor', label: 'Cliente/Proveedor' },
              ].map((opcion) => (
                <label
                  key={opcion.value}
                  className="inline-flex cursor-pointer items-center gap-2 text-sm text-[#333]"
                >
                  <input
                    type="radio"
                    name="tipoPersona"
                    value={opcion.value}
                    checked={formulario.tipoPersona === opcion.value}
                    onChange={actualizar('tipoPersona')}
                    required
                    className="h-4 w-4 accent-[#1a4789]"
                  />
                  {opcion.label}
                </label>
              ))}
            </div>
          </fieldset>

          <hr className="my-6 border-[#e2e6ec]" />

          {/* Queja o denuncia */}
          <h2 className="text-lg font-bold sm:text-xl" style={{ color: AZUL }}>
            Queja o denuncia
          </h2>

          <div className="mt-4 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#333]">
                Lugar o sucursal donde suceden los hechos:
              </span>
              <input
                type="text"
                value={formulario.sucursal}
                onChange={actualizar('sucursal')}
                required
                className={CAMPO}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#333]">
                Puesto de la persona implicada:
              </span>
              <input
                type="text"
                value={formulario.puesto}
                onChange={actualizar('puesto')}
                className={CAMPO}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#333]">
                Nombre(s) de la(s) persona(s) implicada(s):
              </span>
              <input
                type="text"
                value={formulario.nombresImplicados}
                onChange={actualizar('nombresImplicados')}
                className={CAMPO}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#333]">Área</span>
              <select
                value={formulario.area}
                onChange={actualizar('area')}
                className={CAMPO}
              >
                {AREAS.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-[#333]">
                  Fecha de suceso
                </span>
                <input
                  type="date"
                  value={formulario.fechaSuceso}
                  onChange={actualizar('fechaSuceso')}
                  className={CAMPO}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-[#333]">
                  Hora Suceso
                </span>
                <input
                  type="time"
                  value={formulario.horaSuceso}
                  onChange={actualizar('horaSuceso')}
                  className={CAMPO}
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#333]">
                Irregularidad, daño o perjuicio:
              </span>
              <select
                value={formulario.tipoIrregularidad}
                onChange={actualizar('tipoIrregularidad')}
                className={CAMPO}
              >
                {TIPOS_IRREGULARIDAD.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#333]">
                Narración de los hechos:
              </span>
              <textarea
                value={formulario.narracion}
                onChange={actualizar('narracion')}
                required
                rows={5}
                placeholder="Escriba la narración de los hechos:"
                className={`${CAMPO} resize-y`}
              />
            </label>

            <p className="text-xs leading-relaxed text-[#777] sm:text-sm">
              Nota: Para que su denuncia acredite el filtro, deberá de explicar detalladamente su
              denuncia, aportando hechos objetivos verídicos para que no quede duda alguna.
            </p>
          </div>

          <hr className="my-6 border-[#e2e6ec]" />

          {/* Evidencia */}
          <h2 className="text-lg font-bold sm:text-xl" style={{ color: AZUL }}>
            Material de evidencia
          </h2>
          <p className="mt-2 text-sm text-[#333]">Si desea anexar alguna evidencia:</p>

          <input
            ref={inputArchivoRef}
            type="file"
            multiple
            className="hidden"
            onChange={alElegirArchivos}
          />
          <button
            type="button"
            onClick={() => inputArchivoRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={alSoltarArchivos}
            className="mt-3 flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#b0bac8] bg-[#fafbfc] px-4 py-10 transition-colors hover:border-[#1a4789] hover:bg-[#f3f6fb]"
          >
            <FilePlus2 size={40} className="text-[#1a4789]" strokeWidth={1.5} />
            <span className="text-sm font-medium text-[#1a4789]">
              Sube o arrastra algún archivo
            </span>
          </button>
          {archivos.length > 0 && (
            <ul className="mt-3 space-y-1 text-left text-sm text-[#555]">
              {archivos.map((archivo) => (
                <li key={`${archivo.name}-${archivo.size}`}>{archivo.name}</li>
              ))}
            </ul>
          )}

          <hr className="my-6 border-[#e2e6ec]" />

          {/* Sugerencias */}
          <h2 className="text-lg font-bold sm:text-xl" style={{ color: AZUL }}>
            Sugerencias y/o áreas de mejora
          </h2>
          <label className="mt-4 block">
            <span className="mb-1.5 block text-sm font-medium text-[#333]">Sugerencias:</span>
            <textarea
              value={formulario.sugerencias}
              onChange={actualizar('sugerencias')}
              rows={4}
              placeholder="opcional"
              className={`${CAMPO} resize-y`}
            />
          </label>

          <div className="mt-8 rounded-xl bg-[#8fa6c9] px-4 py-5 text-center sm:px-6">
            <p className="text-sm font-medium text-white sm:text-base">
              Gracias por tu participación en la mejora de esta empresa.
            </p>
            <p className="mt-2 text-sm text-white/95 sm:text-base">
              Si te interesa conocer la solución a la denuncia o queja manifestada, deja tus datos
              de contacto:
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#333]">Correo:</span>
              <input
                type="email"
                value={formulario.correo}
                onChange={actualizar('correo')}
                placeholder="Opcional"
                className={CAMPO}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#333]">Teléfono:</span>
              <input
                type="tel"
                value={formulario.telefono}
                onChange={actualizar('telefono')}
                placeholder="Opcional"
                className={CAMPO}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-[#1a4789] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#163a70]"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default IrregularidadesPage;
