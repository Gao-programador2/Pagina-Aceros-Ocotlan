import VistaDetalleEstructural from './VistaDetalleEstructural.jsx';
import imagenPlacas from '../../../assets/Placas.jpg';
import tablaPlacas from '../../../assets/Placa-25.png';

function PlacasPage() {
  return (
    <VistaDetalleEstructural
      nombre="Placas"
      imagen={imagenPlacas}
      tabla={tablaPlacas}
      altImagen="Placas de acero estructural"
      altTabla="Tabla de especificaciones de Placa"
      descripcion="Placas de acero en distintas dimensiones y espesores, con peso estimado en kilogramos según medida y calibre para usos estructurales e industriales."
    />
  );
}

export default PlacasPage;
