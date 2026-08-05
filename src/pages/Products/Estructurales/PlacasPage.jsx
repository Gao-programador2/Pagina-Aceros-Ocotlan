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
      descripcion="Las placas son láminas planas y delgadas de acero, utilizadas en una amplia gama de aplicaciones industriales y de construcción. Su espesor puede variar, y se emplean para fabricar estructuras, componentes de maquinaria, y cubiertas. Las placas de acero son valoradas por su resistencia, durabilidad y capacidad para soportar cargas. Se pueden cortar, soldar y mecanizar según las necesidades específicas del proyecto."
    />
  );
}

export default PlacasPage;
