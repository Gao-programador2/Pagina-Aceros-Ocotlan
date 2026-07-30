import VistaDetalleTubular from './VistaDetalleTubular.jsx';
import imagen from '../../../assets/Tubo estructural.jpg';
import tabla from '../../../assets/tubo estructural-30.png';

function TuboEstructuralPage() {
  return (
    <VistaDetalleTubular
      nombre="Tubo estructural"
      imagen={imagen}
      tabla={tabla}
      altImagen="Tubo estructural de acero"
      altTabla="Tabla de especificaciones de Tubo estructural"
      descripcion="Tubo estructural con longitud estándar de 12.20 m. Fabricado bajo normas ASTM A-120, ASTM A-53 y API 5L Gr. B y X-42, con distintos espesores de pared, cédulas y pesos por metro."
    />
  );
}

export default TuboEstructuralPage;
