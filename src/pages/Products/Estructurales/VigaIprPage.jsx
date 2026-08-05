import VistaDetalleEstructural from './VistaDetalleEstructural.jsx';
import imagenVigaIpr from '../../../assets/Viga IPR.jpg';
import tablaVigaIpr from '../../../assets/Viga IPR-35.png';

function VigaIprPage() {
  return (
    <VistaDetalleEstructural
      nombre="Viga IPR"
      imagen={imagenVigaIpr}
      tabla={tablaVigaIpr}
      altImagen="Vigas IPR de acero"
      altTabla="Tabla de especificaciones de Viga IPR"
      descripcion="Una viga IPR (I Perfil Rectangular) es un tipo de perfil estructural en forma de 'I' utilizado en la construcción. Se caracteriza por tener alas anchas y un alma delgada, lo que le confiere alta resistencia a la flexión y torsión. Se utiliza comúnmente en estructuras de edificios, puentes y otros proyectos de ingeniería civil para soportar cargas pesadas."
    />
  );
}

export default VigaIprPage;
