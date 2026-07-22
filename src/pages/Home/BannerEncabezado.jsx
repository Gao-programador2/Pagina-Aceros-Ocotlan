import { useState } from 'react';
import fondo from '../../assets/fondo.png';
import textoBanner from '../../assets/Texto.png';

const SUCURSALES_POR_ESTADO = {
  Jalisco: [
    'GAO Matriz',
    'CEDI Ferro',
    'Arandas',
    'López Mateos',
    'Azahares',
    'Cocula',
    'Ciudad Guzmán',
    'Ciudad Guzmán Libramiento',
    'La Jalisco',
    'El Salto',
    'Tesistán',
    'Ayotlán',
    'Degollado',
    'Atotonilco',
    'San Miguel El Alto',
    'Lagos de Moreno',
    'Zapotlanejo',
    'El Mirador',
    'Lagos de Moreno CEDI',
    'CAOSA',
    'Poncitlán',
    'La Barca',
    'Madero',
    'Económicos',
    'Ixtapa',
    'Vallarta Matriz',
    'Pitillal',
    'Jauja',
    'Tonalá',
    'Los Altos',
    'Jesús María',
    'San Francisco',
    'Altos Arandas',
    'Ajijic',
    'Acatlán',
    'Autlán',
    'Aeropuerto',
    'Tepa Primeras',
    'Tepa Segundas',
    'Matriz Zula',
    'Ferreteria CAZ',
    'Chapala',
  ],
  Michoacán: ['Sahuayo', 'Morelia', 'La Piedad', 'Lázaro Cárdenas'],
  Nayarit: ['Bucerías', 'Tepic', 'Ixtlán'],
  Yucatán: ['Mérida'],
  'Nuevo León': ['Láminas del Norte Ciénega', 'Láminas del Norte Apodaca'],
  'Baja California': [
    'CEDI Tijuana',
    '5 y 10',
    'Jardín Dorado',
    'Mexicali',
    'Mexicali II',
    'Ensenada',
  ],
  Coahuila: [
    'Anna',
    'Matamoros',
    'Jumbo',
    'Deportiva',
    'México',
    'Fonseca',
    'Torreón CEDIS',
  ],
};

const ESTADOS = Object.keys(SUCURSALES_POR_ESTADO);

/** Datos de contacto por sucursal. */
const INFO_SUCURSALES = {
  'GAO Matriz': {
    titulo: 'Aceros Ocotlán - GDL Matriz',
    direccion: 'Calz. Lázaro Cárdenas #2257 Col. Las Torres. Guadalajara, Jalisco',
    telefono: '33 3884 1300',
  },
  'CEDI Ferro': {
    titulo: 'Aceros Ocotlán - CEDI Ferro',
    direccion: 'C. 9 #461, Col. Ferrocarril. Guadalajara, Jal.',
    telefono: '33 3884 1300',
  },
  Arandas: {
    titulo: 'Aceros Ocotlán - Arandas',
    direccion: 'Francisco I. Madero #268 Col. Centro. Arandas Jalisco',
    telefono: '34 8783 0240',
  },
  'López Mateos': {
    titulo: 'Aceros Ocotlán - López Mateos',
    direccion: 'López Mateos #2050 Col. Francisco Sarabia. Zapopan, Jalisco',
    telefono: '33 3612 5020',
  },
  Azahares: {
    titulo: 'Aceros Ocotlán - Azahares',
    direccion: 'De los azahares #119 Col. Ciudad Bugambilias. Zapopan, Jalisco',
    telefono: '33 3687 0101',
  },

  Cocula: {
    titulo: 'Aceros Ocotlán - Cocula',
    direccion: 'Carretera GDL-Barra de Navidad Km. 67 Col. Centro. Cocula, Jalisco',
    telefono: '37 7773 3111',
  },

  'Ciudad Guzmán': {
    titulo: 'Aceros Ocotlán - Ciudad Guzmán',
    direccion: 'Av. Alberto Cárdenas Jiménez #237 Col. Centro. Ciudad Guzmán, Jalisco',
    telefono: '34 1413 3308',
  },

  'Ciudad Guzmán Libramiento': {
    titulo: 'Aceros Ocotlán - Ciudad Guzmán Libramiento',
    direccion: 'Av. José María González de Hermosillo #415 Col. Centro Ciudad Guzmán',
    telefono: '34 1688 0027',
  },
  'La Jalisco': {
    titulo: 'Aceros Ocotlán - La Jalisco',
    direccion: 'Periférico Oriente. #77 Col. Jalisco 2da sección. Tonalá, Jalisco',
    telefono: '33 3651 2828',
  },
  'El Salto': {
    titulo: 'Aceros Ocotlán - El Salto',
    direccion: 'Carr. Guadalajara-El Salto Vía el Verde #68 Col. El Castillo. El Salto, Jalisco',
    telefono: '33 3688 0556',
  },
  'Tesistán': {
    titulo: 'Aceros Ocotlán - Tesistán',
    direccion: 'Av. Base Aérea Militar #370 Col. Jardines de Nuevo México. Zapopan, Jalisco',
    telefono: '33 1955 4310',
  },
  'Ayotlán': {
    titulo: 'Aceros Ocotlán - Ayotlán',
    direccion: 'González Gallo #179 Col. Centro. Ayotlán, Jalisco',
    telefono: '34 5918 0940',
  },
  'Degollado': {
    titulo: 'Aceros Ocotlán - Degollado',
    direccion: 'Morelos #290 Col. Centro. Degollado, Jalisco',
    telefono: '34 5937 1124',
  },
  'Atotonilco': {
    titulo: 'Aceros Ocotlán - Atotonilco',
    direccion: 'Carr. Atotonilco-Guadalajara Km. 1.5 Col. San Felipe. Atotonilco, Jalisco',
    telefono: '39 1917 1744',
  },
  'San Miguel El Alto': {
    titulo: 'Aceros Ocotlán - San Miguel El Alto',
    direccion: 'Carretera al Valle #54-A Col. Piedras Negras. San Miguel El Alto, Jalisco',
    telefono: '34 7788 3788',
  },
  'Lagos de Moreno': {
    titulo: 'Aceros Ocotlán - Lagos de Moreno',
    direccion: 'Francisco I. Madero #880 Col. Centro. Lagos de Moreno, Jalisco',
    telefono: '47 4742 4104',
  },
  'Zapotlanejo': {
    titulo: 'Aceros Ocotlán - Zapotlanejo',
    direccion: 'Pról. Hidalgo #492 Col. Las Granjas, Zapotlanejo, Jalisco',
    telefono: '33 1600 5156',
  },
  'El Mirador': {
    titulo: 'Aceros Ocotlán - El Mirador',
    direccion: 'Blvd. Anacleto Glez. Flores #625 Col. Españita. Tepatitlán de Morelos, Jalisco',
    telefono: '37 8715 3243',
  },
  'Lagos de Moreno CEDI': {
    titulo: 'Aceros Ocotlán - Lagos de Moreno CEDI',
    direccion: 'Carretera Lago San Juan KM. 5 Col. Huertos Familiares San Pedro. Lagos de Moreno, Jalisco',
    telefono: '47 4688 0495',
  },
  CAOSA: {
    titulo: 'Aceros Ocotlán - CAOSA',
    direccion: 'Av. 20 de Noviembre # 220 Col. Marcos Castellanos. Ocotlán, Jalisco',
    telefono: '39 2922 3137',
  },
  'Poncitlán': {
    titulo: 'Aceros Ocotlán - Poncitlán',
    direccion: 'Michoacán #232 Col. Tepetates. Poncitlán, Jalisco',
    telefono: '39 1921 3459',
  },
  'La Barca': {
    titulo: 'Aceros Ocotlán - La Barca',
    direccion: 'Av. Lázaro Cárdenas #726 Col. Centro. La Barca, Jalisco',
    telefono: '39 3935 1513',
  },
  Madero: {
    titulo: 'Aceros Ocotlán - Madero',
    direccion: 'Madero #785 Col. Florida. Ocotlán, Jalisco',
    telefono: '39 2922 0159',
  },
  'Económicos': {
    titulo: 'Aceros Ocotlán - Económicos',
    direccion: 'Av. 20 de noviembre #631 Col. Nuevo Fuerte. Ocotlán, Jalisco',
    telefono: '39 2923 0121',
  },
  'Ixtapa': {
    titulo: 'Aceros Ocotlán - Ixtapa',
    direccion: 'Carr. Las Juntas-Ixtapa #421 Col. Las Juntas. Puerto Vallarta, Jalisco',
    telefono: '32 2290 0659',
  },
  'Vallarta Matriz': {
    titulo: 'Aceros Ocotlán - Vallarta Matriz',
    direccion: 'Carr. a Tepic #5378 Col. Crucero Las Juntas. Puerto Vallarta, Jalisco',
    telefono: '32 2226 2600',
  },
  'Pitillal': {
    titulo: 'Aceros Ocotlán - Pitillal',
    direccion: 'Av. Revolución #146 Col. Centro Pitillal. Puerto Vallarta, Jalisco',
    telefono: '32 2225 5646',
  },
  'Jauja': {
    titulo: 'Aceros Ocotlán - Jauja',
    direccion: 'Carretera libre a Zapotlanejo #2373 Col. Jauja. Tonalá, Jalisco',
    telefono: '33 3690 2221',
  },
  'Tonalá': {
    titulo: 'Aceros Ocotlán - Tonalá',
    direccion: 'Av. Tonalá #1420 Col. Ciudad Aztlán. Tonalá, Jalisco',
    telefono: '33 3600 1826',
  },
  'Los Altos': {
    titulo: 'Aceros Ocotlán - Los Altos',
    direccion: 'Carretera Arandas-Tepatitlán Km. 10.5 Col. Sin Colonia. Arandas, Jalisco',
    telefono: '34 8784 7701',
  },
  'Jesús María': {
    titulo: 'Aceros Ocotlán - Jesús María',
    direccion: 'Av. Jesús María #215 Col. Los Ladrillos. Jesús María, Jalisco',
    telefono: '34 8704 1049',  
  },
  'San Francisco': {
    titulo: 'Aceros Ocotlán - San Francisco',
    direccion: 'Carretera del Valle #356 Col. Sin Colonia. San Francisco de Asís, Jalisco',
    telefono: '39 1931 7277',
  },
  'Altos Arandas': {
    titulo: 'Aceros Ocotlán - Altos Arandas',
    direccion: 'Carretera Arandas Tepa Km 1+626 Col. Bajío Seco.Arandas, Jalisco',
    telefono: '34 8783 0373',
  },
  'Ajijic': {
    titulo: 'Aceros Ocotlán - Ajijic',
    direccion: 'Carretera Poniente #125 Col. Rancho del Oro. Ajijic, Jalisco',
    telefono: '37 6766 2166',
  },
  'Acatlán': {
    titulo: 'Aceros Ocotlán - Acatlán',
    direccion: 'Carr. Guadalajara-Barra de Navidad Km. 30 S/N. Col. Miravalle.Acatlán de Juárez, Jalisco',
    telefono: '38 7772 0060',
  },
  'Autlán': {
    titulo: 'Aceros Ocotlán - Autlán',
    direccion: 'Mariano Matamoros #553 Col. Centro Autlán de Navarro, Jalisco',
    telefono: '31 7381 0778',
  },
  'Aeropuerto': {
    titulo: 'Aceros Ocotlán - Aeropuerto',
    direccion: 'Carr. A Tepic No. 2514, Int. A Col. Las Juntas. Puerto Vallarta, Jalisco',
    telefono: '32 2290 4004',
  },
  'Tepa Primeras': {
    titulo: 'Aceros Ocotlán - Tepa Primeras',
    direccion: 'Blvd. Anacleto Glez Flores Sur #778 Col. Centro. Tepatitlán, Jalisco',
    telefono: '37 8781 2596',
  },
  'Tepa Segundas': {
    titulo: 'Aceros Ocotlán - Tepa Segundas',
    direccion: 'Blvd. Anacleto Glez Flores #769 Col. Centro. Tepatitlán, Jalisco',
    telefono: '37 8782 2250',
  },
  'Matriz Zula': {
    titulo: 'Aceros Ocotlán - Matriz Zula',
    direccion: 'Francisco Zarco #1194 Col. Linda Vista. Ocotlán, Jalisco',
    telefono: '39 2923 7000',
  },
  'Ferreteria CAZ': {
    titulo: 'Aceros Ocotlán - Ferreteria CAZ',
    direccion: 'Madero #783-A Col. Florida. Ocotlán, Jalisco',
    telefono: '39 2925 3855',
  },
  'Chapala': {
    titulo: 'Aceros Ocotlán - Chapala',
    direccion: 'Carretera San Nicolás #34 Col. Las Redes Chapala, Jalisco',
    telefono: '37 6765 3000',
  },
  Sahuayo: {
    titulo: 'Aceros Ocotlán - Sahuayo',
    direccion: 'Blvd. Lázaro Cárdenas Nte. #400 Col. Centro. Sahuayo, Michoacán',
    telefono: '35 3531 6760',
  },
  Morelia: {
    titulo: 'Aceros Ocotlán - Morelia',
    direccion: 'Periférico Paseo de la Republica #3595 Col. Rincón Quinceo. Morelia, Michoacán',
    telefono: '44 3176 0834',
  },
  'La Piedad': {
    titulo: 'Aceros Ocotlán - La Piedad',
    direccion: 'Blvd. Lázaro Cárdenas #801 Col. La Peña. La Piedad, Michoacán',
    telefono: '35 2525 5804',
  },
  'Lázaro Cárdenas': {
    titulo: 'Aceros Ocotlán - Lázaro Cárdenas',
    direccion: 'Carr. La Orilla Guacamayas Km. 1.5 S/N Col. Aeropuerto. Lázaro Cárdenas, Michoacán',
    telefono: '75 3537 1266',
  },
  'Bucerías': {
    titulo: 'Aceros Ocotlán - Bucerías',
    direccion: 'Héroes de Nacozari #115 Col. Buenos Aires. Bucerías. Bahía de Banderas',
    telefono: '32 9298 6177',
  },
  'Tepic': {
    titulo: 'Aceros Ocotlán - Tepic',
    direccion: 'Av. Tecnológico #3980 Col. Puente San Cayetano. Tepic, Nayarit',
    telefono: '31 1219 6186',
  },
  'Ixtlán': {
    titulo: 'Aceros Ocotlán - Ixtlán',
    direccion: 'Av. Hidalgo Pte. #614 Col. Moderna. Ixtlán del Río, Jalisco',
    telefono: '32 4243 2248',
  },
  'Mérida': {
    titulo: 'Aceros Ocotlán - Mérida',
    direccion: 'Av. Aviación #417 Col. Ciudad Industrial. Mérida, Yucatán',
    telefono: '99 9489 0089',
  },
  'Láminas del Norte Ciénega': {
    titulo: 'Aceros Ocotlán - Láminas del Norte Ciénega',
    direccion: 'Carretera Libre Monterrey a Nuevo Laredo 29.5 Km. S/N Col. Real del Sol. Ciénega de Flores, Nuevo León',
    telefono: '81 2525 2590',
  },
  'Láminas del Norte Apodaca': {
    titulo: 'Aceros Ocotlán - Láminas del Norte Apodaca',
    direccion: 'Carretera Mezquitan Sta. Rosa km 7.6 Col. Santa Rosa. Apodaca, Nuevo León',
    telefono: '81 2525 2590',
  },
  'CEDI Tijuana': {
    titulo: 'Aceros Ocotlán - CEDI Tijuana',
    direccion: 'Camino Antiguo-Tecate #20 Col. Zermeño los Pinos. Tijuana, Baja California',
    telefono: '64 4689 1026',
  },
  '5 y 10': {
    titulo: 'Aceros Ocotlán - 5 y 10',
    direccion: 'Blvd. Lázaro Cárdenas #888-B Fracc. Moreno. Tijuana, Baja California',
    telefono: '66 4621 7706',
  },
  'Jardín Dorado': {
    titulo: 'Aceros Ocotlán - Jardín Dorado',
    direccion: 'Blvd. Terán-Terán #2713 Fracc. Jardín Dorado. Jardín Dorado, Baja California',
    telefono: '66 4103 5169',
  },
  'Mexicali': {
    titulo: 'Aceros Ocotlán - Mexicali',
    direccion: 'Blvd. Lázaro Cárdenas #2525 Col. Villas del Palmar. Tijuana, Baja California',
    telefono: '68 6563 3726',
  },
  'Mexicali II': {
    titulo: 'Aceros Ocotlán - Mexicali II',
    direccion: 'Calz. Héctor Terán Terán #2598, Xochimilco, 21380, 21395 Mexicali, B.C.',
    telefono: '68 6561 8477',
  },
  'Ensenada': {
    titulo: 'Aceros Ocotlán - Ensenada',  
    direccion: 'Av. Pedro Loyola #330 Col. Carlos Pacheco. Ensenada, Baja California',
    telefono: '64 6120 8529',
  },
  Anna: {
    titulo: 'Aceros Ocotlán - Anna',
    direccion: 'Blvd. Centenario #1375 Col. Anna. Torreón, Coahuila',
    telefono: '87 1204 8131',
  },
  'Matamoros': {
    titulo: 'Aceros Ocotlán - Matamoros',
    direccion: 'Blvd. Torreón Matamoros #3120 Col. Independencia. Matamoros, Coahuila',
    telefono: '87 1296 7035',
  },
  'Jumbo': {
    titulo: 'Aceros Ocotlán - Jumbo',
    direccion: 'Calzada Agroindustrias #336 Col. Parque Industrial Oriente. Torreón, Coahuila',
    telefono: '87 1187 6868',
  },
  Deportiva: {
    titulo: 'Aceros Ocotlán - Deportiva',
    direccion: 'Calle 36 #565 Sur Esquina con Blvd Revolución. Col. Centro. Torreón, Coahuila',
    telefono: '87 1720 1451',
  },
  'México': {
    titulo: 'Aceros Ocotlán - México',
    direccion: 'Calzada México #148 Col. Nueva California. Torreón, Coahuila',
    telefono: '87 1720 8615',
  },
  'Fonseca': {
    titulo: 'Aceros Ocotlán - Fonseca',
    direccion: 'Carretera la partida #648 Granja la Barranca. Ejido San Agustín. Torreón, Coahuila',
    telefono: '87 1408 8358',
  },
  'Torreón CEDIS': {
    titulo: 'Aceros Ocotlán - Torreón CEDI',
    direccion: 'Antigua Carretera Torreón a San Pedro S/N, 27400 Torreón, Coah.',
    telefono: '87 1204 8131',
  },
};

const SELECT_CLASES =
  'w-full rounded-md border border-steel-300 bg-white px-4 py-2.5 text-sm text-steel-700 shadow focus:outline-none focus:ring-2 focus:ring-[#2a5db8] sm:w-64';

function BannerEncabezado() {
  const [estado, setEstado] = useState('');
  const [sucursal, setSucursal] = useState('');

  const sucursales = estado ? SUCURSALES_POR_ESTADO[estado] : [];
  const infoSucursal = INFO_SUCURSALES[sucursal];

  const manejarCambioEstado = (evento) => {
    setEstado(evento.target.value);
    setSucursal('');
  };

  const telefonoHref = infoSucursal
    ? `tel:${infoSucursal.telefono.replace(/\s/g, '')}`
    : undefined;

  return (
    <section className="relative -mt-[7.5rem] flex min-h-[100svh] items-center overflow-hidden text-white md:-mt-32 md:min-h-[88vh]">
      {/* Imagen de fondo: en móvil enfoca más el acero (parte baja) */}
      <img
        src={fondo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[center_72%] sm:object-[center_60%] md:object-center"
      />

      {/* Capa oscura ligera: deja apreciar la imagen de fondo */}
      <div className="pointer-events-none absolute inset-0 bg-steel-950/25" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 pb-8 pt-[8.5rem] sm:pb-6 sm:pt-44 md:pt-52 lg:pb-8 lg:pt-60">
        {/* Imagen central del banner */}
        <img
          src={textoBanner}
          alt="Lo que hace fuerte a México"
          className="w-56 max-w-full drop-shadow-2xl sm:w-80 lg:w-96"
        />

        {/* Selects de estado y sucursal */}
        <div className="mt-10 flex w-full max-w-2xl flex-col justify-center gap-3 sm:mt-20 sm:flex-row sm:gap-4">
          <select
            value={estado}
            onChange={manejarCambioEstado}
            aria-label="Selecciona un estado"
            className={SELECT_CLASES}
          >
            <option value="" disabled>
              Selecciona un estado
            </option>
            {ESTADOS.map((nombreEstado) => (
              <option key={nombreEstado} value={nombreEstado}>
                {nombreEstado}
              </option>
            ))}
          </select>

          <select
            value={sucursal}
            onChange={(evento) => setSucursal(evento.target.value)}
            disabled={!estado}
            aria-label="Selecciona una sucursal"
            className={`${SELECT_CLASES} disabled:cursor-not-allowed disabled:bg-steel-100 disabled:text-steel-400`}
          >
            <option value="" disabled>
              Selecciona una sucursal
            </option>
            {sucursales.map((nombreSucursal) => (
              <option key={nombreSucursal} value={nombreSucursal}>
                {nombreSucursal}
              </option>
            ))}
          </select>
        </div>

        {/* Tarjeta de información de la sucursal seleccionada */}
        {infoSucursal && (
          <div className="mt-5 w-full max-w-2xl rounded-lg bg-[#15357d] px-6 py-5 text-center text-white shadow-lg">
            <p className="text-base font-bold sm:text-lg">{infoSucursal.titulo}</p>
            <p className="mt-1 text-sm sm:text-base">{infoSucursal.direccion}</p>
            <p className="mt-2 text-sm sm:text-base">Llamar a sucursal:</p>
            <a
              href={telefonoHref}
              className="text-sm underline underline-offset-2 hover:text-white/80 sm:text-base"
            >
              {infoSucursal.telefono}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default BannerEncabezado;
