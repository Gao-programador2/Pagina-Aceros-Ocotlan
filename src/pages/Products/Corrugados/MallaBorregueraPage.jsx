import VistaDetalleCorrugado from './VistaDetalleCorrugado.jsx';
import imagenMallaBorreguera from '../../../assets/malla-borreguera.jpg';
import tablaMallaBorreguera from '../../../assets/Malla borreguera-21.png';

/**
 * Detalle del producto Malla borreguera (Corrugados y Trefilados).
 */
function MallaBorregueraPage() {
  return (
    <VistaDetalleCorrugado
      nombre={"Malla borreguera"}
      imagen={imagenMallaBorreguera}
      tabla={tablaMallaBorreguera}
      altImagen={"Rollos de malla borreguera galvanizada"}
      altTabla={"Tabla de especificaciones de Malla borreguera"}
      descripcion={"Malla borreguera galvanizada para cercado de potreros y ganado. Disponible en distintas alturas, con alambres de calibre superior e intermedio y abertura uniforme."}
    />
  );
}

export default MallaBorregueraPage;
