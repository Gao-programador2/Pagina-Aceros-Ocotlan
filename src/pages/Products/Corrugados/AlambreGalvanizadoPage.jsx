import VistaDetalleCorrugado from './VistaDetalleCorrugado.jsx';
import imagenAlambreGalvanizado from '../../../assets/Alambre galvanizado.jpg';
import tablaAlambreGalvanizado from '../../../assets/Alambre galvanizado suave-03.png';

/**
 * Detalle del producto Alambre galvanizado (Corrugados y Trefilados).
 */
function AlambreGalvanizadoPage() {
  return (
    <VistaDetalleCorrugado
      nombre={"Alambre galvanizado"}
      imagen={imagenAlambreGalvanizado}
      tabla={tablaAlambreGalvanizado}
      altImagen={"Rollos de alambre galvanizado suave"}
      altTabla={"Tabla de especificaciones de Alambre galvanizado suave"}
      descripcion={"Alambre galvanizado suave con capa de zinc uniforme, disponible en distintos calibres para amarre, cercado ligero y usos generales en obra. Incluye identificador de calibre en cada rollo y cumple con la especificación ASTM A-641."}
    />
  );
}

export default AlambreGalvanizadoPage;
