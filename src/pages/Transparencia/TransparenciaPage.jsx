import { Link } from 'react-router-dom';
import fondoEscritorio from '../../assets/fondo.png';
import fondoMovil from '../../assets/PORTADA DE PÁG. WEB camión_MOVIL.png';

const BOTONES = [
  {
    id: 'irregularidades',
    label: 'Irregularidades,\nAbusos o Mal servicio',
    to: '/transparencia-ao/irregularidades',
  },
  {
    id: 'fraudes',
    label: 'Fraudes',
    to: '/transparencia-ao/fraudes',
  },
];

/**
 * Vista de Transparencia: fondo del inicio + recuadro con opciones de denuncia.
 */
function TransparenciaPage() {
  return (
    <section className="relative -mt-[7.5rem] flex min-h-[100svh] items-center justify-center overflow-hidden md:-mt-32">
      <img
        src={fondoEscritorio}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover object-center md:block"
      />
      <img
        src={fondoMovil}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[center_40%] md:hidden"
      />

      <div className="pointer-events-none absolute inset-0 bg-steel-950/35" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-10 pt-[8.5rem] sm:px-6 sm:pt-44 md:pt-52">
        <h1 className="text-center text-4xl font-semibold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
          Transparencia
        </h1>

        <div className="mt-10 w-full rounded-2xl border border-white/50 bg-[#8fa6c9]/60 px-5 py-8 shadow-inner backdrop-blur-[2px] sm:mt-14 sm:rounded-3xl sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <h2 className="text-center text-xl font-bold text-white sm:text-2xl lg:text-3xl">
            ¿Qué te gustaría denunciar?
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-5">
            {BOTONES.map((boton) => {
              const clasesBoton =
                'inline-flex min-h-[3.75rem] w-full max-w-xs items-center justify-center rounded-xl bg-[#1a4789] px-5 py-3 text-center text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#163a70] whitespace-pre-line sm:w-72 sm:min-h-[4rem] sm:px-6 sm:text-base';

              if (boton.to) {
                return (
                  <Link key={boton.id} to={boton.to} className={clasesBoton}>
                    {boton.label}
                  </Link>
                );
              }

              return (
                <button key={boton.id} type="button" className={clasesBoton}>
                  {boton.label}
                </button>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm leading-relaxed text-white/95 sm:mt-10 sm:text-base">
            En Grupo Aceros Ocotlán trabajamos por la transparencia, la honestidad y el servicio.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TransparenciaPage;
