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
      descripcion={"Alambre recocido negro, dúctil y fácil de trabajar, utilizado para amarre de acero de refuerzo, embobinado y usos generales en construcción e industria."}
    />
  );
}

export default AlambreRecocidoPage;
