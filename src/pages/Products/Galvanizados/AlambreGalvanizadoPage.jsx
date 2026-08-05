import VistaDetalleGalvanizado from './VistaDetalleGalvanizado.jsx';
import imagenAlambreGalvanizado from '../../../assets/Alambre galvanizado.jpg';
import tablaAlambreGalvanizado from '../../../assets/Alambre galvanizado suave-03.png';

/**
 * Detalle del producto Alambre galvanizado (Galvanizados).
 * Mismo contenido que en Corrugados; breadcrumb y regreso van a Galvanizados.
 */
function AlambreGalvanizadoPage() {
  return (
    <VistaDetalleGalvanizado
      nombre="Alambre galvanizado"
      imagen={imagenAlambreGalvanizado}
      tabla={tablaAlambreGalvanizado}
      altImagen="Rollos de alambre galvanizado suave"
      altTabla="Tabla de especificaciones de Alambre galvanizado suave"
      descripcion="Un alambre galvanizado es un alambre de acero recubierto con una capa de zinc para protegerlo contra la corrosión. El proceso de galvanización crea una barrera que previene la oxidación, aumentando la durabilidad del alambre en condiciones ambientales adversas. Este tipo de alambre es utilizado en aplicaciones como cercas, construcción, agricultura y electricidad. Es valorado por su resistencia, longevidad y bajo mantenimiento, haciendo que sea ideal para usos exteriores y estructuras expuestas a la intemperie."
    />
  );
}

export default AlambreGalvanizadoPage;
