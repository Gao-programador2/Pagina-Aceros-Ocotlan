import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import imagenTeeZeta from '../../../assets/Tee y Zeta.jpg';
import imagenTablaTeeZeta from '../../../assets/Tee y zeta-10.png';
import {
  RUTA_COMERCIALES,
  RUTA_PRODUCTOS,
  TituloRutaProductos,
} from '../TituloRutaProductos.jsx';

const WHATSAPP_URL =
  'https://wa.me/523339680608?text=Hola,%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20de%20Tee%20y%20Zeta';

function IconoWhatsApp({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

/**
 * Detalle del producto Tee y Zeta (Comerciales).
 */
function TeeZetaPage() {
  const navegar = useNavigate();

  return (
    <section className="relative bg-[#f3f4f6] pb-10 pt-6 sm:pt-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-4 flex min-w-0 items-center gap-3 sm:mb-5 sm:gap-4">
          <button
            type="button"
            onClick={() => navegar(RUTA_COMERCIALES)}
            aria-label="Regresar a Comerciales"
            className="-ml-1 flex h-10 w-10 shrink-0 items-center justify-center text-[#1a4789] transition-opacity hover:opacity-70 sm:-ml-2"
          >
            <ChevronLeft size={32} strokeWidth={1.75} />
          </button>
          <div className="min-w-0 flex-1">
          <TituloRutaProductos
            segmentos={[
              { label: 'Productos', to: RUTA_PRODUCTOS },
              { label: 'Comerciales', to: RUTA_COMERCIALES },
              { label: 'Tee y Zeta' },
            ]}
          />
          </div>
        </div>

        <div className="rounded-2xl bg-white px-4 py-5 shadow-sm sm:px-6 sm:py-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="overflow-hidden rounded-xl">
              <img
                src={imagenTeeZeta}
                alt="Perfiles de acero Tee y Zeta"
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:min-h-[28rem] lg:h-full"
              />
            </div>

            <div className="flex min-w-0 flex-col">
              <p className="mt-0 text-sm leading-relaxed text-[#555] sm:text-base">
                Este perfil tiene una sección en forma de &quot;T&quot; suelen utilizarse sobre todo para
                estructuras metálicas y de acero.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#555] sm:text-base">
                Los perfiles &quot;Z&quot; tienen una sección con forma de zeta, generalmente con un canto
                interior redondeado y un canto interior vivo. Las dimensiones del producto varían
                según los requerimientos del cliente, su presentación es en tramo.
              </p>

              <div className="mt-5 overflow-hidden rounded-lg">
                <img
                  src={imagenTablaTeeZeta}
                  alt="Tabla de especificaciones de Tee y Zeta"
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="mt-6 flex justify-end">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1a4789] px-5 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#163a70] sm:text-base"
                >
                  <IconoWhatsApp className="h-5 w-5" />
                  Solicita una cotización
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeeZetaPage;
