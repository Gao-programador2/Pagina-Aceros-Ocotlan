import VistaDetalleEstructural from './VistaDetalleEstructural.jsx';
import imagenAngulos from '../../../assets/Angulos.jpg';
import tablaAngulos from '../../../assets/Angulos-05.png';

function AngulosEstructuralesPage() {
  return (
    <VistaDetalleEstructural
      nombre="Ángulos"
      imagen={imagenAngulos}
      tabla={tablaAngulos}
      altImagen="Ángulos estructurales de acero"
      altTabla="Tabla de especificaciones de Ángulos"
      descripcion="Ángulos de acero para estructuras, herrería y refuerzos. Disponibles en distintas dimensiones (pulgadas y mm) con peso por metro y por pieza."
    />
  );
}

export default AngulosEstructuralesPage;
