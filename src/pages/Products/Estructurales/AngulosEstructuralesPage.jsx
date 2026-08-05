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
      descripcion="Un ángulo es un perfil metálico en forma de 'L' con dos alas perpendiculares entre sí. Se utiliza para proporcionar soporte estructural en construcciones y ensamblajes. Sus alas pueden tener igual o diferente longitud, y su diseño permite distribuir cargas y resistir fuerzas de manera eficiente. Es común en aplicaciones de construcción, fabricación de maquinaria y estructuras metálicas. La forma del ángulo facilita su uso en esquinas y uniones de estructuras."
    />
  );
}

export default AngulosEstructuralesPage;
