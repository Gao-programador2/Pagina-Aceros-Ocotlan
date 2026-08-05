import VistaDetalleTubular from './VistaDetalleTubular.jsx';
import imagen from '../../../assets/PTR.jpg';
import tabla from '../../../assets/PTR-26.png';

function PtrPage() {
  return (
    <VistaDetalleTubular
      nombre="PTR"
      imagen={imagen}
      tabla={tabla}
      altImagen="PTR rectangular y cuadrado"
      altTabla="Tabla de medidas y pesos teóricos PTR rectangular"
      descripcion="Un PTR (Perfil Tubular Rectangular) es un perfil estructural hueco de acero, con sección transversal rectangular. Se utiliza en la construcción y en la fabricación de estructuras metálicas debido a su resistencia, durabilidad y versatilidad. Es común en marcos, vigas, columnas y otras aplicaciones donde se requieren estructuras ligeras pero fuertes."
    />
  );
}

export default PtrPage;
