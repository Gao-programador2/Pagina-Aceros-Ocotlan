import VistaDetalleCorrugado from './VistaDetalleCorrugado.jsx';
import imagenAlambrePuas from '../../../assets/Alambre de puas.jpg';
import tablaAlambrePuas from '../../../assets/Alambre de puas-04.png';

/**
 * Detalle del producto Alambre de púas (Corrugados y Trefilados).
 */
function AlambrePuasPage() {
  return (
    <VistaDetalleCorrugado
      nombre={"Alambre de púas"}
      imagen={imagenAlambrePuas}
      tabla={tablaAlambrePuas}
      altImagen={"Rollo de alambre de púas galvanizado"}
      altTabla={"Tabla de especificaciones de Alambre de púas"}
      descripcion={"Alambre de púas galvanizado de dos hilos retorcidos, ideal para cercos perimetrales, potreros y protección de predios. Ofrece alta resistencia mecánica y cumple con la norma ASTM A-121."}
    />
  );
}

export default AlambrePuasPage;
