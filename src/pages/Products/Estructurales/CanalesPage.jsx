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
      descripcion="Los canales son perfiles estructurales con una sección transversal en forma de 'C' o 'U', fabricados para proporcionar soporte y estabilidad en construcciones. Se utilizan comúnmente en la construcción de estructuras metálicas, puentes y edificios para soportar cargas y distribuir el peso. Su diseño permite una combinación eficiente de resistencia y ligereza, adaptándose a diversas aplicaciones en la ingeniería y la arquitectura. Son valorados por su robustez y versatilidad en la construcción."
    />
  );
}

export default CanalesPage;
