import VistaDetalleEstructural from './VistaDetalleEstructural.jsx';
import imagenPolinMonten from '../../../assets/Polin Monten.jpg';
import tablaPolinMonten from '../../../assets/Polin mon-ten-24.png';

/**
 * Detalle del producto Polín Monten (Estructurales).
 * Mismo contenido que en Comerciales; breadcrumb y regreso van a Estructurales.
 */
function PolinMontenPage() {
  return (
    <VistaDetalleEstructural
      nombre="Polín Monten"
      imagen={imagenPolinMonten}
      tabla={tablaPolinMonten}
      altImagen="Polín Monten estructural"
      altTabla="Tabla de especificaciones de Polín Monten"
      descripcion="Un polín Monten es un perfil estructural en forma de 'C' utilizado en la construcción para soportar cargas. Su diseño permite una distribución uniforme de cargas y facilita la conexión con otros elementos estructurales. Es valorado por su resistencia, estabilidad y capacidad para soportar tensiones y compresiones en diversas aplicaciones de ingeniería."
    />
  );
}

export default PolinMontenPage;
