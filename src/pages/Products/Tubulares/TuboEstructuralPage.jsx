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
      descripcion="Un tubo estructural es un perfil metálico cilíndrico utilizado en la construcción y la ingeniería para formar parte de estructuras y soportes. Su diseño permite una alta resistencia y rigidez, facilitando el soporte de cargas pesadas y la estabilidad de las estructuras. Se utiliza comúnmente en edificios, puentes y otras aplicaciones de construcción. Su sección transversal puede ser circular, cuadrada o rectangular."
    />
  );
}

export default TuboEstructuralPage;
