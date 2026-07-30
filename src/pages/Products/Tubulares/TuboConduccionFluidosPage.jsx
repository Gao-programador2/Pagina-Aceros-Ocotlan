import VistaDetalleTubular from './VistaDetalleTubular.jsx';
import imagen from '../../../assets/Tubo conduccion de fluidos.jpg';
import tabla from '../../../assets/tubo de conducción de fluidos-29.png';

function TuboConduccionFluidosPage() {
  return (
    <VistaDetalleTubular
      nombre="Tubo conducción de fluidos"
      imagen={imagen}
      tabla={tabla}
      altImagen="Tubería para conducción de fluidos"
      altTabla="Tabla de especificaciones de tubería para conducción de fluidos"
      descripcion="Tubería para conducción de fluidos con diámetros, espesores, cédula y presiones de prueba según ASTM-120 y ASTM-53, además de peso por metro y por pieza."
    />
  );
}

export default TuboConduccionFluidosPage;
