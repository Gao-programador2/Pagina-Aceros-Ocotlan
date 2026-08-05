import VistaDetalleGalvanizado from './VistaDetalleGalvanizado.jsx';
import imagenGrapas from '../../../assets/Grapas.jpg';
import tablaGrapas from '../../../assets/Grapas-09.png';

/**
 * Detalle del producto Grapas (Galvanizados).
 */
function GrapasPage() {
  return (
    <VistaDetalleGalvanizado
      nombre="Grapas"
      imagen={imagenGrapas}
      tabla={tablaGrapas}
      altImagen="Grapas galvanizadas y negras"
      altTabla="Tabla de especificaciones de Grapas"
      descripcion="Las grapas galvanizadas son sujetadores metálicos, generalmente en forma de U, que han sido recubiertos con una capa de zinc mediante un proceso de galvanización. Este recubrimiento protege las grapas de la corrosión, haciéndolas más duraderas y resistentes a la oxidación. Se utilizan comúnmente en construcción, carpintería y jardinería para fijar o asegurar materiales como alambres, mallas o cercas."
    />
  );
}

export default GrapasPage;
