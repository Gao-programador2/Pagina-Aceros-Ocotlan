import VistaDetallePlano from './VistaDetallePlano.jsx';
import imagen from '../../../assets/Lamina negra.jpg';
import tabla from '../../../assets/Lamina negra-16.png';

function LaminaNegraPage() {
  return (
    <VistaDetallePlano
      nombre="Lámina negra"
      imagen={imagen}
      tabla={tabla}
      altImagen="Lámina negra de acero"
      altTabla="Tabla de especificaciones de Lámina negra"
      descripcion="La lámina negra es una hoja de acero sin recubrimiento, utilizada principalmente en la construcción y manufactura. Destaca por su versatilidad, siendo ideal para soldar, cortar y moldear. Es comúnmente empleada en la fabricación de estructuras metálicas, refuerzos y soportes, debido a su resistencia y facilidad de procesamiento en proyectos industriales."
    />
  );
}

export default LaminaNegraPage;
