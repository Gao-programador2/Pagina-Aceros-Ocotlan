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
      descripcion="Lámina negra rolada en caliente, LCR/LRF y rolada en frío, con pesos por medida (3×6 a 4×10) y kg/m² según calibre y espesor."
    />
  );
}

export default LaminaNegraPage;
