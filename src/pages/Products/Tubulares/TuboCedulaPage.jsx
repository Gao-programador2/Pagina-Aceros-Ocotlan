import VistaDetalleTubular from './VistaDetalleTubular.jsx';
import imagen from '../../../assets/Tubo cedula.jpg';
import tabla from '../../../assets/Tubo cedula-28.png';

function TuboCedulaPage() {
  return (
    <VistaDetalleTubular
      nombre="Tubo cédula"
      imagen={imagen}
      tabla={tabla}
      altImagen="Tubo cédula de acero"
      altTabla="Tabla de especificaciones de Tubo cédula 30 y 40"
      descripcion="Tubo cédula 30 (longitud 6.00 m) y cédula 40 (longitud 6.40 m), con diámetros, espesores, peso por metro y datos de empaque por paquete."
    />
  );
}

export default TuboCedulaPage;
