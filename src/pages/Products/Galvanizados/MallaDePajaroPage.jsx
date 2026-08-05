import VistaDetalleGalvanizado from './VistaDetalleGalvanizado.jsx';
import imagenMallaPajaro from '../../../assets/Malla de pajaro.png';
import tablaMallaPajaro from '../../../assets/Malla de pajaro-19.png';

/**
 * Detalle del producto Malla de pájaro (Galvanizados).
 */
function MallaDePajaroPage() {
  return (
    <VistaDetalleGalvanizado
      nombre="Malla de pájaro"
      imagen={imagenMallaPajaro}
      tabla={tablaMallaPajaro}
      altImagen="Rollo de malla de pájaro hexagonal"
      altTabla="Tabla de especificaciones de Malla de pájaro"
      descripcion="Una malla de pájaro es una red metálica fina y resistente, fabricada con alambre de acero galvanizado o inoxidable. Está diseñada para prevenir la entrada de aves en áreas específicas, como invernaderos, almacenes o edificios. Sus mallas tienen aberturas pequeñas que impiden el paso de pájaros sin obstruir la visibilidad o ventilación. Es duradera y efectiva para proteger cultivos y estructuras de daños o contaminaciones causadas por aves."
    />
  );
}

export default MallaDePajaroPage;
