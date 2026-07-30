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
      descripcion="Perfiles tubulares estructurales HSS de sección cuadrada, en distintas medidas y espesores, con peso por metro lineal según calibre."
    />
  );
}

export default HssCuadradoPage;
