import VistaDetallePlano from './VistaDetallePlano.jsx';
import imagen from '../../../assets/Lamina antiderrapante.jpg';
import tabla from '../../../assets/Lamina antiderrapante-17.png';

function LaminaAntiderrapantePage() {
  return (
    <VistaDetallePlano
      nombre="Lámina antiderrapante"
      imagen={imagen}
      tabla={tabla}
      altImagen="Lámina y placa antiderrapante"
      altTabla="Tabla de especificaciones de Lámina y placa antiderrapante"
      descripcion="Lámina y placa antiderrapante en distintos calibres y espesores, con pesos teóricos para medidas 3×8, 4×8, 3×10 y 4×10. Los pesos pueden variar según el espesor."
    />
  );
}

export default LaminaAntiderrapantePage;
