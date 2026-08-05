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
      descripcion="Una lámina antiderrapante es un material metálico diseñado para proporcionar una superficie que previene deslizamientos y caídas. Tiene un patrón texturizado o estriado que aumenta el agarre y la tracción. Se utiliza comúnmente en pisos industriales, escaleras y plataformas para mejorar la seguridad en entornos con alta probabilidad de humedad o contaminación."
    />
  );
}

export default LaminaAntiderrapantePage;
