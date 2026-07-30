import VistaDetalleCorrugado from './VistaDetalleCorrugado.jsx';
import imagenMallaPajaro from '../../../assets/Malla de pajaro.png';
import tablaMallaPajaro from '../../../assets/Malla de pajaro-19.png';

/**
 * Detalle del producto Malla de pájaro (Corrugados y Trefilados).
 */
function MallaDePajaroPage() {
  return (
    <VistaDetalleCorrugado
      nombre={"Malla de pájaro"}
      imagen={imagenMallaPajaro}
      tabla={tablaMallaPajaro}
      altImagen={"Rollo de malla de pájaro hexagonal"}
      altTabla={"Tabla de especificaciones de Malla de pájaro"}
      descripcion={"Malla de pájaro (hexagonal) galvanizada para aviarios, jardinería y protección ligera. Disponible en distintas aberturas, alturas y calibres."}
    />
  );
}

export default MallaDePajaroPage;
