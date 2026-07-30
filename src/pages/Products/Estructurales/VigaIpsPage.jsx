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
      descripcion="Vigas IPS para estructuras metálicas, con datos de peralte, peso, área y propiedades en ejes X-X y Y-Y, además de medidas para detallado."
    />
  );
}

export default VigaIpsPage;
