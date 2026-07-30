import VistaDetalleTubular from './VistaDetalleTubular.jsx';
import imagen from '../../../assets/Perfil tubular.jpg';
import tabla1 from '../../../assets/perfiles tubulares 2-32.png';
import tabla2 from '../../../assets/perfiles tubulares-31.png';

function PerfilTubularPage() {
  return (
    <VistaDetalleTubular
      nombre="Perfil tubular"
      imagen={imagen}
      tablas={[tabla1, tabla2]}
      altImagen="Perfiles tubulares de acero"
      altTablas={[
        'Tabla de especificaciones de Perfiles tubulares (1)',
        'Tabla de especificaciones de Perfiles tubulares (2)',
      ]}
      descripcion="Perfiles tubulares para herrería y marcos, en calibre 18 o 20, con largo estándar de 6.0 m. Incluyen medidas cuadradas, rectangulares y perfiles especiales (R, MH, Zeta, pasamanos, riel, tablero, entre otros)."
    />
  );
}

export default PerfilTubularPage;
