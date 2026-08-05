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
      descripcion="Un tubo cédula es un tubo fabricado en acero con un grosor de pared específico, designado por la 'cédula' (schedule), que indica su resistencia y capacidad para soportar presión. Se utiliza en aplicaciones industriales y de construcción para transportar líquidos y gases, así como en estructuras que requieren alta durabilidad. La cédula determina el espesor de la pared del tubo y, por ende, su resistencia."
    />
  );
}

export default TuboCedulaPage;
