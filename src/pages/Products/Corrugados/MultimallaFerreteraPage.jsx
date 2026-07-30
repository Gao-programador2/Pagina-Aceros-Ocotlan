import VistaDetalleCorrugado from './VistaDetalleCorrugado.jsx';
import imagenMultimalla from '../../../assets/Multimalla ferretera.jpg';
import tablaMultimalla from '../../../assets/Multimalla ferretera-22.png';

/**
 * Detalle del producto Multimalla ferretera (Corrugados y Trefilados).
 */
function MultimallaFerreteraPage() {
  return (
    <VistaDetalleCorrugado
      nombre={"Multimalla ferretera"}
      imagen={imagenMultimalla}
      tabla={tablaMultimalla}
      altImagen={"Paneles de multimalla ferretera electrosoldada"}
      altTabla={"Tabla de especificaciones de Multimalla ferretera"}
      descripcion={"Multimalla ferretera galvanizada electrosoldada para refuerzo, cercado y usos ferreteros. Disponible en varias aberturas, calibres y alturas en rollos de 20 m."}
    />
  );
}

export default MultimallaFerreteraPage;
