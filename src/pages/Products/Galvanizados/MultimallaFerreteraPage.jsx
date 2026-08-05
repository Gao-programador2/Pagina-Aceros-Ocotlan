import VistaDetalleGalvanizado from './VistaDetalleGalvanizado.jsx';
import imagenMultimalla from '../../../assets/Multimalla ferretera.jpg';
import tablaMultimalla from '../../../assets/Multimalla ferretera-22.png';

/**
 * Detalle del producto Multimalla ferretera (Galvanizados).
 */
function MultimallaFerreteraPage() {
  return (
    <VistaDetalleGalvanizado
      nombre="Multimalla ferretera"
      imagen={imagenMultimalla}
      tabla={tablaMultimalla}
      altImagen="Paneles de multimalla ferretera electrosoldada"
      altTabla="Tabla de especificaciones de Multimalla ferretera"
      descripcion="Una multimalla ferretera es una red de alambre de acero utilizada en aplicaciones de construcción y ferretería. Se compone de varias capas de malla entrelazadas, ofreciendo mayor resistencia y soporte estructural. Su diseño permite una eficaz separación de materiales y refuerza la durabilidad en aplicaciones como encofrado y refuerzo de concreto. Es valorada por su versatilidad y resistencia en entornos de trabajo exigentes."
    />
  );
}

export default MultimallaFerreteraPage;
