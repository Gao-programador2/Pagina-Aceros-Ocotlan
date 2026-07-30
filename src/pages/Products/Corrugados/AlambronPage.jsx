import VistaDetalleCorrugado from './VistaDetalleCorrugado.jsx';
import imagenAlambron from '../../../assets/Alambron.jpg';
import tablaAlambron from '../../../assets/Alambron-02.png';

/**
 * Detalle del producto Alambrón (Corrugados y Trefilados).
 */
function AlambronPage() {
  return (
    <VistaDetalleCorrugado
      nombre={"Alambrón"}
      imagen={imagenAlambron}
      tabla={tablaAlambron}
      altImagen={"Bobinas de alambrón de acero"}
      altTabla={"Tabla de especificaciones de Alambrón"}
      descripcion={"Alambrón de acero en bobina, materia prima para trefilado y fabricación de alambres. Disponible en distintos diámetros para procesos industriales y de transformación."}
    />
  );
}

export default AlambronPage;
