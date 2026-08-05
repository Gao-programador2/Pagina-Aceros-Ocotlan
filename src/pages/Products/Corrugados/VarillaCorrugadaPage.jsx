import VistaDetalleCorrugado from './VistaDetalleCorrugado.jsx';
import imagenVarilla from '../../../assets/Varilla corrugada.jpg';
import tablaVarilla from '../../../assets/Varilla Corrugada-33.png';

/**
 * Detalle del producto Varilla corrugada (Corrugados y Trefilados).
 */
function VarillaCorrugadaPage() {
  return (
    <VistaDetalleCorrugado
      nombre={"Varilla corrugada"}
      imagen={imagenVarilla}
      tabla={tablaVarilla}
      altImagen={"Varillas corrugadas de acero de refuerzo"}
      altTabla={"Tabla de especificaciones de Varilla corrugada"}
      descripcion={"Una varilla es un elemento de construcción alargado y cilíndrico, fabricado en acero para proporcionar soporte estructural. Se utiliza principalmente en la construcción de concreto armado, donde se integra en la mezcla para mejorar la resistencia a la tracción y la flexión. Las varillas de acero están disponibles en diferentes diámetros y longitudes, adaptándose a diversas necesidades estructurales. Su resistencia y durabilidad hacen que sean esenciales en la construcción de edificaciones y obras de ingeniería."}
    />
  );
}

export default VarillaCorrugadaPage;
