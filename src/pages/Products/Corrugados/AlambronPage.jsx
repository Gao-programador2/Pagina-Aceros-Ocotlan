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
      descripcion={"El alambrón es un producto metálico semiacabado con una sección transversal redonda. Su diámetro suele oscilar entre 5 y 16 mm, siendo más grueso que un alambre convencional. Gracias a su resistencia y ductilidad, es ampliamente empleado en la construcción y la industria manufacturera. Además, puede ser sometido a procesos adicionales, como el trefilado, para obtener alambres más delgados y específicos."}
    />
  );
}

export default AlambronPage;
