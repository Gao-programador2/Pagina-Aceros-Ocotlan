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
      descripcion={"Un castillo Armex es un elemento estructural prefabricado utilizado en la construcción de edificaciones para reforzar columnas, muros y castillos en estructuras de concreto. Consiste en una armadura de acero compuesta por varillas longitudinales y estribos transversales, que proporcionan resistencia adicional contra esfuerzos de compresión y flexión. Su diseño estandarizado facilita su instalación, ahorrando tiempo y mano de obra en obras. Además, es altamente efectivo para mejorar la estabilidad y la durabilidad de las construcciones."}
    />
  );
}

export default CastilloArmexPage;
