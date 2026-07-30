import VistaDetalleGalvanizado from './VistaDetalleGalvanizado.jsx';
import imagenClavos from '../../../assets/Clavos.jpg';
import tablaClavos from '../../../assets/Clavos-08.png';

/**
 * Detalle del producto Clavos (Galvanizados).
 */
function ClavosPage() {
  return (
    <VistaDetalleGalvanizado
      nombre="Clavos"
      imagen={imagenClavos}
      tabla={tablaClavos}
      altImagen="Clavos galvanizados"
      altTabla="Tabla de especificaciones de Clavos"
      descripcion="Clavos galvanizados para carpintería, concreto y usos generales. Disponibles en clavo estándar con cabeza, clavo para concreto y clavo tomatero, en distintos largos y calibres, en cajas de 25 kg o cajas con 25 bolsas de 1 kg."
    />
  );
}

export default ClavosPage;
