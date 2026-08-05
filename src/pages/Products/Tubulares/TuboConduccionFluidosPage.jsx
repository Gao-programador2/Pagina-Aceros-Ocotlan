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
      descripcion="Un tubo de conducción de fluidos es un conducto cilíndrico hecho de acero diseñado para transportar líquidos o gases en sistemas industriales o de construcción. Su resistencia a la corrosión y alta presión lo hace ideal para aplicaciones que requieren durabilidad y fiabilidad. Se utiliza en una variedad de industrias, como la petroquímica y la construcción, para asegurar un flujo constante y seguro de fluidos."
    />
  );
}

export default TuboConduccionFluidosPage;
