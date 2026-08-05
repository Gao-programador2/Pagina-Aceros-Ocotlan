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
      descripcion="El HSS rectangular, es un perfil metálico con una sección transversal rectangular. Se emplea en la construcción y en estructuras metálicas para proporcionar soporte en vigas, columnas y marcos. Su forma permite una distribución eficaz de cargas y facilita la integración con otros elementos estructurales. Es apreciado por su resistencia, versatilidad y capacidad para soportar diversas fuerzas en aplicaciones de ingeniería y arquitectura."
    />
  );
}

export default HssRectangularPage;
