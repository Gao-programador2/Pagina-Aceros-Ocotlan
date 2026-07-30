import VistaDetalleEstructural from './VistaDetalleEstructural.jsx';
import imagenHssRectangular from '../../../assets/HSS rectangular.jpg';
import tablaHssRectangular from '../../../assets/HSS rectangular-14.png';

function HssRectangularPage() {
  return (
    <VistaDetalleEstructural
      nombre="HSS Rectangular"
      imagen={imagenHssRectangular}
      tabla={tablaHssRectangular}
      altImagen="Perfiles HSS rectangulares"
      altTabla="Tabla de especificaciones de HSS Rectangular"
      descripcion="Perfiles tubulares estructurales HSS de sección rectangular, disponibles en distintas dimensiones y espesores con peso por metro lineal."
    />
  );
}

export default HssRectangularPage;
