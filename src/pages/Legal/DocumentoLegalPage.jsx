import fondoEscritorio from '../../assets/fondo.png';
import fondoMovil from '../../assets/PORTADA DE PÁG. WEB camión_MOVIL.png';

/** Contenido legal compartido (aviso de privacidad / términos). */
export const SECCIONES_AVISO_PRIVACIDAD = [
  {
    titulo: '1. Identidad y domicilio del responsable',
    intro:
      'De acuerdo a lo previsto en la “Ley Federal de Protección de Datos Personales”, declara Grupo Aceros Ocotlán, S. A. de C.V., ser una empresa legalmente constituida de conformidad con las leyes mexicanas, con domicilio en Avenida Lázaro Cárdenas Número 2257 de la Colonia Las Torres, C.P. 44920, en Guadalajara, Jalisco, México, y como responsable del tratamiento de sus datos personales, hace de su conocimiento que la información de nuestros clientes es tratada de forma estrictamente confidencial por lo que al proporcionar sus datos personales, tales como:',
    items: [
      'Nombre Completo.',
      'Dirección.',
      'Registro Federal de Contribuyentes (RFC).',
      'Registro Único de Población (CURP).',
      'Teléfonos de Casa, Oficina, Negocio y/o Móviles.',
      'Correo Electrónico.',
      'Crédito otorgado y/o formas de pago.',
      'Fotografías.',
      'Copias de Identificaciones.',
    ],
  },
  {
    titulo: '2. Finalidades principales',
    intro: 'Estos serán utilizados única y exclusivamente para los siguientes fines:',
    items: [
      'Campañas de Fidelidad.',
      'Información.',
      'Prestación de Servicios (compraventa de material de Acero y para la construcción).',
      'Actualización de la Base de Datos.',
      'Cualquier finalidad análoga o compatible con las anteriores.',
      'Acceder al catálogo de clientes para el cumplimiento de obligaciones derivadas de operaciones mercantiles en las que Usted es parte como comprador.',
      'Proporcionarle información de productos, servicios, promociones, encuestas, concursos o avisos que pudieran ser de su interés.',
    ],
    subtitulo: 'En el caso de Datos sensibles, tales como:',
    subitems: [
      'Datos Financieros (Estado de Resultados, Ingresos, Estados de Cuenta, Actas Constitutivas, Poderes y demás relacionados).',
      'Datos Patrimoniales (Bienes Materiales, Muebles e Inmuebles, y demás relacionados).',
      'Datos Personales (Estado Civil, Nacionalidad, y demás relacionados).',
      'Referencias familiares y no familiares (Nombre, Dirección, Teléfono, relación, etc.).',
    ],
  },
  {
    titulo: '3. Finalidades secundarias',
    intro: 'Estos serán utilizados única y exclusivamente para los siguientes fines:',
    items: [
      'Investigación y/u Obtención de Créditos.',
      'Cualquier finalidad análoga o compatible con la anterior.',
    ],
  },
  {
    titulo: '4. Protección de datos',
    parrafos: [
      'Para prevenir el acceso no autorizado a sus datos personales y con el fin de asegurar que la información sea utilizada para los fines establecidos en este aviso de privacidad, han sido establecidos diversos procedimientos con la finalidad de evitar usos o divulgaciones no autorizadas de sus datos, permitiéndonos tratarlos debidamente.',
      'Grupo Aceros Ocotlán S.A. DE C.V. cuenta con los medios físicos, digitales y electrónicos para proteger y limitar el uso o divulgación de su información y no obtiene ni almacena información de ninguna especie mediante cookies, web beacons o similares durante el acceso a su página web y no utiliza la información de los particulares para fines distintos a los relacionados con sus operaciones comerciales y/o los arriba señalados.',
      'Así mismo, le informamos que sus datos personales pueden ser Transmitidos para ser tratados por empresas distintas a GRUPO ACEROS OCOTLÁN S.A. de C.V., lo anterior con la única y exclusiva finalidad de llevar a cabo las operaciones comerciales con la empresa.',
    ],
  },
  {
    titulo: '5. Mecanismos para mostrar conformidad o inconformidad',
    parrafos: [
      'Todos sus datos personales son tratados de acuerdo a la legislación aplicable y vigente en el país, por ello le informamos que usted tiene en todo momento los derechos (ARCO) de acceder, rectificar, cancelar u oponerse al tratamiento que le damos a sus datos personales; derecho que podrá hacer valer a través del Área de Privacidad encargada de la seguridad de datos personales en el Teléfono (33) 38-84-13-00 Ext. 33222, 33236 o 33262 por medio de su correo electrónico: avisoprivacidad@acerosocotlan.mx.',
      'A través de estos medios usted podrá actualizar sus datos y especificar el medio por el cual desea recibir información, ya que en caso de no contar con esta especificación de su parte, Grupo Aceros Ocotlán, S. A. de C. V. establecerá libremente el medio que considere pertinente para enviarle información.',
      'Este aviso de privacidad podrá ser modificado por Grupo Aceros Ocotlán, S. A. de C. V., las modificaciones serán oportunamente informadas a través de correo electrónico, teléfono, o cualquier otro medio de comunicación que Grupo Aceros Ocotlán, S. A. de C. V., determine para tal efecto.',
    ],
  },
  {
    titulo: '6. Consentimiento',
    parrafos: [
      'Al proporcionar información personal y sensible de manera física, electrónica o por cualquier medio, usted declara que ha leído el presente aviso de privacidad y entiende el alcance y contenido del mismo y al no manifestar oposición por escrito ante la empresa referida, expresa su entera conformidad con los términos y autorizaciones para que sus datos puedan ser transferidos y usados con las finalidades planteadas.',
      'Si Usted no está de acuerdo con los términos señalados en este aviso, no ingrese ni proporcione sus datos por ningún medio.',
      'Compartir Datos con Terceros: Nos comprometemos a no transferir su información personal a terceros sin su consentimiento, salvo las excepciones previstas en el artículo 37 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, así como a realizar esta transferencia en los términos que fija esa ley.',
    ],
    contacto: [
      'Contacto Grupo Aceros Ocotlán, S.A. de C.V.',
      'Depto. Jurídico',
      'Tel. 38-84-13-00. Cel. 0443332008106',
      'Email: avisoprivacidad@acerosocotlan.mx',
    ],
  },
];

function ListaNumerada({ items }) {
  return (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-white/95 sm:text-[0.95rem]">
      {items.map((item) => (
        <li key={item} className="pl-1">
          {item}
        </li>
      ))}
    </ol>
  );
}

/**
 * Plantilla visual legal (fondo + contenedor cristal como Transparencia).
 *
 * @param {{ titulo: string, secciones?: typeof SECCIONES_AVISO_PRIVACIDAD }} props
 */
function DocumentoLegalPage({ titulo, secciones = SECCIONES_AVISO_PRIVACIDAD }) {
  return (
    <section className="relative -mt-[7.5rem] min-h-[100svh] overflow-hidden md:-mt-32">
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

      <div className="pointer-events-none absolute inset-0 bg-steel-950/40" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-14 pt-[8.5rem] sm:px-6 sm:pb-16 sm:pt-44 md:pt-52">
        <h1 className="text-center text-3xl font-semibold tracking-tight text-white drop-shadow-md sm:text-4xl lg:text-5xl">
          {titulo}
        </h1>
        <p className="mt-3 text-center text-sm font-medium uppercase tracking-[0.12em] text-white/90 sm:text-base">
          Grupo Aceros Ocotlán, S.A. de C.V.
        </p>

        <article className="mt-8 w-full rounded-2xl border border-white/50 bg-[#8fa6c9]/60 px-5 py-8 shadow-inner backdrop-blur-[2px] sm:mt-10 sm:rounded-3xl sm:px-10 sm:py-11 lg:px-12 lg:py-12">
          <div className="space-y-9 sm:space-y-10">
            {secciones.map((seccion) => (
              <section key={seccion.titulo}>
                <h2 className="text-base font-bold uppercase tracking-wide text-white sm:text-lg">
                  {seccion.titulo}
                </h2>

                {seccion.intro ? (
                  <p className="mt-3 text-sm leading-relaxed text-white/95 sm:text-[0.95rem]">
                    {seccion.intro}
                  </p>
                ) : null}

                {seccion.items ? <ListaNumerada items={seccion.items} /> : null}

                {seccion.subtitulo ? (
                  <p className="mt-5 text-sm leading-relaxed text-white/95 sm:text-[0.95rem]">
                    {seccion.subtitulo}
                  </p>
                ) : null}

                {seccion.subitems ? <ListaNumerada items={seccion.subitems} /> : null}

                {seccion.parrafos?.map((parrafo) => (
                  <p
                    key={parrafo.slice(0, 48)}
                    className="mt-3 text-sm leading-relaxed text-white/95 sm:text-[0.95rem]"
                  >
                    {parrafo}
                  </p>
                ))}

                {seccion.contacto ? (
                  <div className="mt-5 space-y-1 border-t border-white/25 pt-5 text-sm leading-relaxed text-white/95 sm:text-[0.95rem]">
                    {seccion.contacto.map((linea) => (
                      <p key={linea}>{linea}</p>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>

          <footer className="mt-10 border-t border-white/30 pt-8 text-center sm:mt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white sm:text-base">
              Atentamente
            </p>
            <p className="mt-3 text-sm font-medium text-white sm:text-base">
              Grupo Aceros Ocotlán, S.A. de C.V.
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-sm">
              Un mundo de acero
            </p>
          </footer>
        </article>
      </div>
    </section>
  );
}

export default DocumentoLegalPage;
