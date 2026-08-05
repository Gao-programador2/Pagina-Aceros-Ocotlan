import VistaDetalleCorrugado from './VistaDetalleCorrugado.jsx';
import imagenAlambreRecocido from '../../../assets/Alambre recocido.jpg';
import tablaAlambreRecocido from '../../../assets/Alambre recocido_Mesa de trabajo 1.png';

/**
 * Detalle del producto Alambre recocido (Corrugados y Trefilados).
 */
function AlambreRecocidoPage() {
  return (
    <VistaDetalleCorrugado
      nombre={"Alambre recocido"}
      imagen={imagenAlambreRecocido}
      tabla={tablaAlambreRecocido}
      altImagen={"Rollos de alambre recocido negro"}
      altTabla={"Tabla de especificaciones de Alambre recocido"}
      descripcion={"El alambre recocido es un tipo de alambre que ha sido sometido a un proceso donde se calienta y luego se enfría lentamente para aumentar su maleabilidad y flexibilidad. Este tratamiento térmico reduce la dureza del acero, facilitando su manejo y uso en diversas aplicaciones, como la construcción, atado de materiales, y en la fabricación de productos de alambre. Es comúnmente utilizado en la construcción y manufactura por su facilidad para doblarse y torcerse sin romperse."}
    />
  );
}

export default AlambreRecocidoPage;
