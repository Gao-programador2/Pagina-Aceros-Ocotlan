import VistaDetalleEstructural from './VistaDetalleEstructural.jsx';
import imagenVigaIps from '../../../assets/Viga IPS.jpg';
import tablaVigaIps from '../../../assets/Viga IPS-34.png';

function VigaIpsPage() {
  return (
    <VistaDetalleEstructural
      nombre="Viga IPS"
      imagen={imagenVigaIps}
      tabla={tablaVigaIps}
      altImagen="Vigas IPS de acero"
      altTabla="Tabla de especificaciones de Viga IPS"
      descripcion="Una Viga IPS es un tipo de viga estructural con perfil en forma de 'I', utilizada en la construcción para soportar cargas pesadas. El término 'IPS' se refiere a su clasificación dentro de un estándar específico de dimensiones y propiedades mecánicas. Estas vigas son comunes en edificaciones, puentes y otras estructuras donde se requiere resistencia y estabilidad."
    />
  );
}

export default VigaIpsPage;
