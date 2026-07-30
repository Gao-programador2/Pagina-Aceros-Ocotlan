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
      descripcion={"Varilla corrugada de alta resistencia para refuerzo de concreto. Disponible en grados ASTM A-615 y G-6000, con distintos diámetros, pesos unitarios y presentaciones estándar."}
    />
  );
}

export default VarillaCorrugadaPage;
