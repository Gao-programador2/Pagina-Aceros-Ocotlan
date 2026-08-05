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
      descripcion="Un perfil tubular es una estructura hueca. Se utiliza en la construcción y fabricación por su alta resistencia y ligereza en comparación con perfiles macizos. Es común en aplicaciones como estructuras metálicas, andamios, marcos de maquinaria y sistemas de transporte. Su diseño hueco permite reducir el peso sin comprometer la resistencia estructural."
    />
  );
}

export default PerfilTubularPage;
