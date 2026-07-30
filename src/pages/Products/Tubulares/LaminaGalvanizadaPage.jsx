import VistaDetalleTubular from './VistaDetalleTubular.jsx';
import imagen from '../../../assets/Lamina galvanizada.jpg';
import tabla from '../../../assets/lamina galvanizada-15.png';

function LaminaGalvanizadaPage() {
  return (
    <VistaDetalleTubular
      nombre="Lámina galvanizada"
      imagen={imagen}
      tabla={tabla}
      altImagen="Lámina galvanizada corrugada"
      altTabla="Tabla de especificaciones de Lámina galvanizada"
      descripcion="Lámina galvanizada en perfiles RN-100/35, R-72, R-101 y SECC-25, también a medidas especiales. Disponibles en distintos calibres con datos de peso, momentos y acciones permisibles."
    />
  );
}

export default LaminaGalvanizadaPage;
