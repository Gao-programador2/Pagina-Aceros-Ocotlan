import VistaDetalleCorrugado from './VistaDetalleCorrugado.jsx';
import imagenCastilloArmex from '../../../assets/Castillo armex.jpg';
import tablaCastilloArmex from '../../../assets/Castillo armex-07.png';

/**
 * Detalle del producto Castillo Armex (Corrugados y Trefilados).
 */
function CastilloArmexPage() {
  return (
    <VistaDetalleCorrugado
      nombre={"Castillo Armex"}
      imagen={imagenCastilloArmex}
      tabla={tablaCastilloArmex}
      altImagen={"Armaduras prefabricadas Castillo Armex"}
      altTabla={"Tabla de especificaciones de Castillos Armex Grado 6000"}
      descripcion={"Castillos Armex prefabricados grado 6000 para columnas y refuerzos de concreto. Disponibles en geometrías de línea, triángulo, cuadrado y rectángulo, en piezas estándar de 6.00 m."}
    />
  );
}

export default CastilloArmexPage;
