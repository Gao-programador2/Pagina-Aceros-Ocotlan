import { Link } from 'react-router-dom';
import { Phone, CircleArrowRight } from 'lucide-react';
import imagenFerreteria from '../../assets/Ferreteria.png';

function BannerFerreteria() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:pb-16">
      <div className="flex flex-col gap-8 rounded-2xl bg-[#e8ebf2] p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-10 lg:p-10">
        {/* Imagen */}
        <div className="w-full shrink-0 overflow-hidden rounded-2xl lg:w-[42%]">
          <img
            src={imagenFerreteria}
            alt="Ferretería Aceros Ocotlán"
            className="aspect-[4/3] h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Contenido */}
        <div className="flex min-w-0 flex-1 flex-col">
          <h2 className="text-[1.65rem] font-semibold leading-tight text-[#4a5568] sm:text-[1.85rem]">
            Ferretería
          </h2>
          <p className="mt-2 max-w-xl text-[0.95rem] leading-snug text-[#555]">
            Contamos con diferentes productos de acero y ferretería para darte las mejores opciones
            de construcción con la mejor calidad del mercado y al mejor precio.
          </p>
{/** 
          <Link
            to="/categoria-producto/productos/"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl border border-[#0d47a1] bg-white px-6 py-2.5 text-sm font-medium text-[#0d47a1] transition-colors hover:bg-blue-50"
          >
            Ver catálogo
            <CircleArrowRight size={18} />
          </Link>
*/}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="tel:3339680608"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0d47a1] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0a3a85]"
            >
              <Phone size={16} />
              Ferretería Ocotlán
            </a>
            <a
              href="tel:3338841300"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0d47a1] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0a3a85]"
            >
              <Phone size={16} />
              Express GDL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerFerreteria;
