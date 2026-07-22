import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import imagenNivelado from '../../assets/Niveladora-scaled.jpg';
import imagenBeneficios from '../../assets/Beneficios Nivelado.png';
import imagenTablaCaliente from '../../assets/Tabala Nivelado 1.png';
import imagenTablaFria from '../../assets/Tabla Nivelado 2.png';

const AZUL = '#1a4789';
const WHATSAPP_URL =
  'https://wa.me/523339680608?text=Hola,%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20de%20Nivelado';

const APLICACIONES = [
  'Plataformas',
  'Sector automotriz',
  'Conductos de aire acondicionado',
  'Molinos y tolvas',
  'Muebles industriales',
  'Otros',
];

function IconoWhatsApp({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

/**
 * Detalle del servicio Nivelado.
 */
function NiveladoPage() {
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
                Nivelado
              </h1>
            </div>
            <p className="mt-3 max-w-3xl pl-9 text-left text-sm leading-relaxed text-[#444] sm:pl-12 sm:text-base">
            Consiste en desenrollar y cortar la lámina y dejarla completamente lisa en forma de hoja, de tal manera que no presente curvatura alguna, esta transformación puede ser para: Lámina antiderrapante, caliente, decapada, fria, galvanizada y placa hasta 7/8 de espesor; permitiendo tener una lámina sin ondulaciones y a la medida, perfecta para el sector industrial.
            </p>
          </div>

          {/* Imagen principal */}
          <div className="overflow-hidden rounded-xl">
            <img
              src={imagenNivelado}
              alt="Maquinaria de nivelado de lámina Aceros Ocotlán"
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
                Para contribuir en el proceso de transformación de la industria ofrecemos el nivelado de lámina, que consiste en desarrollar y cortar la lámina para dejarla lisa, permitiéndome tener una lámina sin ondulaciones y a la medida.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#1a4789] sm:text-xl">Aplicaciones</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#444] sm:text-[0.95rem]">
                Dentro de este proceso podemos encontrar diversos usos en el mercado, dependiendo del tipo de lámina, especialmente en la fabricación de:                </p>
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

              <div>
                <h2 className="text-lg font-bold text-[#1a4789] sm:text-xl">Capacidades</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#444] sm:text-[0.95rem]">
                Se tiene la capacidad de nivelar lámina antiderrapante, caliente, decapada, fría y recubierta. Con esta gama de láminas, ofrecemos un amplio rango de calibres para trabajar, para láminas roladas en frío nivelamos desde el calibre 30 hasta el 12, y en las roladas en caliente desde el calibre 16 hasta el 7/8.

Al finalizar, podemos obtener una hoja procesada en diferentes anchos, desde 20” a 96” y largos hasta de 15 mts, además le podemos ofrecer servicio de maquila con garantía.
                </p>
              </div>

              {/* Beneficios */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={imagenBeneficios}
                  alt="Beneficios del nivelado: desperdicio, diversidad y nivelación"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            {/* Columna derecha — tablas lado a lado */}
            <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={imagenTablaCaliente}
                  alt="Lámina caliente — nivelado y corte transversal"
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={imagenTablaFria}
                  alt="Lámina fría — nivelado y corte transversal"
                  className="h-auto w-full object-contain"
                />
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

export default NiveladoPage;
