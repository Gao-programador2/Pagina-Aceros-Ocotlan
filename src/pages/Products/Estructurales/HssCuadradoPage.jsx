import VistaDetalleEstructural from './VistaDetalleEstructural.jsx';
import imagenHssCuadrado from '../../../assets/HSS CUADRADO.jpg';
import tablaHssCuadrado from '../../../assets/HSS cuadrado-13.png';

function HssCuadradoPage() {
  return (
    <VistaDetalleEstructural
      nombre="HSS Cuadrado"
      imagen={imagenHssCuadrado}
      tabla={tablaHssCuadrado}
      altImagen="Perfiles HSS cuadrados"
      altTabla="Tabla de especificaciones de HSS Cuadrado"
      descripcion="El HSS cuadrado, es un perfil metálico con una sección transversal cuadrada, fabricado en acero. Se utiliza en la construcción y fabricación para proporcionar soporte estructural en columnas, vigas y marcos. Su forma proporciona una distribución uniforme de cargas y facilita la conexión con otros componentes. Es valorado por su resistencia, estabilidad y capacidad para soportar tensiones y compresiones en diversas aplicaciones de ingeniería."
    />
  );
}

export default HssCuadradoPage;
