import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import imagenAcanalado from '../../assets/Acanalado.jpg';
import imagenBeneficios from '../../assets/Beneficios Acanalado de lámina.png';
import imagenTablaTipos1 from '../../assets/Tabla Acanalado de lámina 1.png';
import imagenTablaTipos2 from '../../assets/Tabla Acanalado de lámina 2.png';

const AZUL = '#1a4789';
const WHATSAPP_URL =
  'https://wa.me/523339680608?text=Hola,%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20de%20Acanalado%20de%20L%C3%A1mina';

const APLICACIONES = ['Techos', 'Muros', 'Entrepisos'];

function IconoWhatsApp({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

/**
 * Detalle del servicio Acanalado de Lámina.
 */
function AcanaladoLaminaPage() {
  const navegar = useNavigate();

  const volver = () => {
    if (window.history.length > 1) {
      navegar(-1);
      return;
    }
    navegar('/#servicios');
  };

  return (
    <section className="relative bg-[#f3f4f6] pb-10 pt-6 sm:pt-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl bg-white px-4 py-6 shadow-sm sm:px-8 sm:py-8 lg:px-10">
          {/* Encabezado */}
          <div className="mb-5 sm:mb-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={volver}
                aria-label="Regresar"
                className="-ml-4 flex h-10 w-10 shrink-0 items-center justify-center text-[#1a4789] transition-opacity hover:opacity-70 sm:-ml-6"
              >
                <ChevronLeft size={32} strokeWidth={1.75} />
              </button>
              <h1
                className="text-2xl font-bold text-[#1a4789] sm:text-3xl lg:text-4xl"
                style={{ color: AZUL }}
              >
                Acanalado de lámina
              </h1>
            </div>
            <p className="mt-3 max-w-3xl pl-9 text-left text-sm leading-relaxed text-[#444] sm:pl-12 sm:text-base">
            Tenemos el servicio de acanalado de lámina, para los modelos R-100/35, R-101 , R-72 y Steel Deck 25, en todos los calibres comerciales, tanto en acabado galvanizado, como pintro, en el largo requerido.
            </p>
          </div>

          {/* Imagen principal */}
          <div className="overflow-hidden rounded-xl">
            <img
              src={imagenAcanalado}
              alt="Proceso de acanalado de lámina Aceros Ocotlán"
              className="aspect-[21/9] w-full object-cover object-center sm:aspect-[5.4/1]"
            />
          </div>

          {/* Contenido en dos columnas */}
          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Columna izquierda */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-[#1a4789] sm:text-xl">Proceso</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#444] sm:text-[0.95rem]">
                Fomentando el desarrollo del país, en Aceros Ocotlán contamos con el servicio de acanalado de láminas, que consiste e un proceso de transformación de la lámina recubierta proveniente de rollo, a la que se hace un procedimiento de rolados ondulares y rectangulares.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#1a4789] sm:text-xl">Capacidades</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#444] sm:text-[0.95rem]">
                Para satisfacer la demanda de cualquier plan de trabajo contamos con un  inventario de lámina de la más alta calidad, garantizando el cumplimiento de las  características y normas de fabricación para cualquier aplicación, con certificados  de calidad de materia prima y ofreciendo el servicio de maquila.
                </p>
              </div>

              {/* Beneficios */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={imagenBeneficios}
                  alt="Beneficios del acanalado de lámina: costo, tiempo, rapidez y diseño"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            {/* Columna derecha */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-[#1a4789] sm:text-xl">Aplicaciones</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#444] sm:text-[0.95rem]">
                Dentro de las aplicaciones de esta lámina en la industria de la construcción, se encuentran:                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {APLICACIONES.map((aplicacion) => (
                    <span
                      key={aplicacion}
                      className="rounded-full border-2 border-[#1a4789] px-4 py-1.5 text-sm font-medium text-[#1a4789]"
                    >
                      {aplicacion}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tablas de tipos de láminas */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={imagenTablaTipos1}
                    alt="Tipos de láminas — acabados disponibles por modelo"
                    className="h-auto w-full object-contain"
                  />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={imagenTablaTipos2}
                    alt="Tipos de láminas — calibres disponibles por modelo"
                    className="h-auto w-full object-contain"
                  />
                </div>
                <div className="space-y-1 text-xs leading-relaxed text-[#555] sm:text-sm">
                  <p>* En caso de requerir algún tipo de calibre diferente, podemos trabajarlo.</p>
                  <p>* Todo el acanalado se fabrica en un mínimo de 1 m.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-sm text-[#666] sm:text-left">
            ¿Buscas otro servicio?{' '}
            <Link
              to="/#servicios"
              className="font-medium text-[#1a4789] underline underline-offset-2"
            >
              Volver a Servicios
            </Link>
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2.5 self-end rounded-full bg-[#1a4789] px-5 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#163a70] sm:self-auto sm:text-base"
          >
            <IconoWhatsApp className="h-5 w-5" />
            Solicita una cotización
          </a>
        </div>
      </div>
    </section>
  );
}

export default AcanaladoLaminaPage;
