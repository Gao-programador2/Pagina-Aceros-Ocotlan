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
      descripcion="Los clavos galvanizados son clavos recubiertos con una capa de zinc para protegerlos contra la corrosión y el óxido. Este recubrimiento hace que sean ideales para aplicaciones exteriores o en ambientes húmedos, donde la resistencia a la oxidación es crucial. Se utilizan en construcción, carpintería y otras tareas donde la durabilidad a largo plazo es importante."
    />
  );
}

export default ClavosPage;
