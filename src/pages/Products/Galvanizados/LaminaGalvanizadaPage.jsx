import VistaDetalleGalvanizado from './VistaDetalleGalvanizado.jsx';
import imagen from '../../../assets/Lamina galvanizada.jpg';
import tabla from '../../../assets/lamina galvanizada-15.png';

/**
 * Detalle del producto Lámina galvanizada (Galvanizados).
 * Mismo contenido que en Planos; breadcrumb y regreso van a Galvanizados.
 */
function LaminaGalvanizadaPage() {
  return (
    <VistaDetalleGalvanizado
      nombre="Lámina galvanizada"
      imagen={imagen}
      tabla={tabla}
      altImagen="Lámina galvanizada corrugada"
      altTabla="Tabla de especificaciones de Lámina galvanizada"
      descripcion="La lámina galvanizada es una hoja de acero recubierta con una capa de zinc mediante un proceso de galvanización, que protege el acero de la corrosión y oxidación. Este material es ampliamente utilizado en la construcción, fabricación de techos, estructuras metálicas y en la industria automotriz debido a su durabilidad y resistencia a los elementos."
    />
  );
}

export default LaminaGalvanizadaPage;
