import VistaDetalleEstructural from './VistaDetalleEstructural.jsx';
import imagenVigaIpr from '../../../assets/Viga IPR.jpg';
import tablaVigaIpr from '../../../assets/Viga IPR-35.png';

function VigaIprPage() {
  return (
    <VistaDetalleEstructural
      nombre="Viga IPR"
      imagen={imagenVigaIpr}
      tabla={tablaVigaIpr}
      altImagen="Vigas IPR de acero"
      altTabla="Tabla de especificaciones de Viga IPR"
      descripcion="Vigas IPR (perfil I de patín ancho) para estructuras. Disponibles en distintos pesos y dimensiones (h, b, hi, tw, tf) según la tabla técnica."
    />
  );
}

export default VigaIprPage;
