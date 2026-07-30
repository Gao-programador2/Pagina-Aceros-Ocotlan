import VistaDetalleEstructural from './VistaDetalleEstructural.jsx';
import imagenCanales from '../../../assets/Canales.jpg';
import tablaCanales from '../../../assets/CANALES-06.png';

function CanalesPage() {
  return (
    <VistaDetalleEstructural
      nombre="Canales"
      imagen={imagenCanales}
      tabla={tablaCanales}
      altImagen="Canales estructurales de acero"
      altTabla="Tabla de especificaciones de Canales"
      descripcion="Canales estructurales de acero con longitud estándar de 12.20 m. Disponibles en distintos peraltes y pesos; cumplen con la norma ASTM A-36."
    />
  );
}

export default CanalesPage;
