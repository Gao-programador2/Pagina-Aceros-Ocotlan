import VistaDetalleGalvanizado from './VistaDetalleGalvanizado.jsx';
import imagenAlambrePuas from '../../../assets/Alambre de puas.jpg';
import tablaAlambrePuas from '../../../assets/Alambre de puas-04.png';

/**
 * Detalle del producto Alambre de púas (Galvanizados).
 * Mismo contenido que en Corrugados; breadcrumb y regreso van a Galvanizados.
 */
function AlambrePuasPage() {
  return (
    <VistaDetalleGalvanizado
      nombre="Alambre de púas"
      imagen={imagenAlambrePuas}
      tabla={tablaAlambrePuas}
      altImagen="Rollo de alambre de púas galvanizado"
      altTabla="Tabla de especificaciones de Alambre de púas"
      descripcion="El Alambre de púas es un tipo de cercado compuesto por un cable de acero con puntas afiladas distribuidas a lo largo de su longitud. Estas púas están diseñadas para disuadir o impedir el paso de personas o animales. Es comúnmente utilizado en áreas rurales, instalaciones de seguridad y para delimitar propiedades. Su resistencia y durabilidad lo hacen efectivo en la protección de terrenos y bienes."
    />
  );
}

export default AlambrePuasPage;
