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
      descripcion={"Una malla borreguera es una cerca hecha de alambre de acero galvanizado, diseñada para contener ganado como ovejas y cabras. Presenta aberturas graduadas, más pequeñas en la parte inferior y más grandes en la parte superior, para mayor seguridad y ventilación. Es resistente, duradera y adecuada para uso agrícola en la delimitación de terrenos y protección de animales."}
    />
  );
}

export default MallaBorregueraPage;
