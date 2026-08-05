import VistaDetalleGalvanizado from './VistaDetalleGalvanizado.jsx';
import imagenMallaCriba from '../../../assets/Malla criba ornamental.jpg';
import tablaMallaCriba from '../../../assets/malla criba ornamental galvanizada-23.png';

/**
 * Detalle del producto Malla criba ornamental (Galvanizados).
 */
function MallaCribaOrnamentalPage() {
  return (
    <VistaDetalleGalvanizado
      nombre="Malla criba ornamental"
      imagen={imagenMallaCriba}
      tabla={tablaMallaCriba}
      altImagen="Rollo de malla criba ornamental galvanizada"
      altTabla="Tabla de especificaciones de Malla criba ornamental galvanizada"
      descripcion="Una malla criba ornamental es un tipo de malla decorativa fabricada con alambre de acero, diseñada tanto para funciones estéticas como prácticas. Sus patrones o diseños decorativos añaden un toque estético a cercas, barandales o fachadas. Además de su valor ornamental, proporciona una barrera funcional para la separación o protección en aplicaciones arquitectónicas y de diseño. Es resistente y puede ser personalizada para adaptarse a diferentes estilos y necesidades decorativas."
    />
  );
}

export default MallaCribaOrnamentalPage;
