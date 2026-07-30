import VistaDetallePlano from './VistaDetallePlano.jsx';
import imagenPlacas from '../../../assets/Placas.jpg';
import tablaPlacas from '../../../assets/Placa-25.png';

function PlacasPlanosPage() {
  return (
    <VistaDetallePlano
      nombre="Placas"
      imagen={imagenPlacas}
      tabla={tablaPlacas}
      altImagen="Placas de acero"
      altTabla="Tabla de especificaciones de Placa"
      descripcion="Placas de acero en distintas dimensiones y espesores, con peso estimado en kilogramos según medida y calibre para usos estructurales e industriales."
    />
  );
}

export default PlacasPlanosPage;
