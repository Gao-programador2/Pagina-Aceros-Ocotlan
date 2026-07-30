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
      descripcion="Grapas para cercado y fijación, disponibles en versiones negra y galvanizada (corrugada, Negra “V” y Corcel III). Se ofrecen en distintos calibres y longitudes, en cajas de 25 kg o cajas con 25 bolsas de 1 kg."
    />
  );
}

export default GrapasPage;
