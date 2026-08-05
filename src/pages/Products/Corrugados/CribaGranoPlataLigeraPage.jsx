import VistaDetalleCorrugado from './VistaDetalleCorrugado.jsx';
import imagenCribaPlata from '../../../assets/Criba de gran de plata ligera.jpg';
import tablaCribaPlata from '../../../assets/criba de grano de plata ligera-18.png';

/**
 * Detalle del producto Criba de grano de plata ligera (Corrugados y Trefilados).
 */
function CribaGranoPlataLigeraPage() {
  return (
    <VistaDetalleCorrugado
      nombre={"Criba de grano de plata ligera"}
      imagen={imagenCribaPlata}
      tabla={tablaCribaPlata}
      altImagen={"Rollo de criba de grano de plata ligera"}
      altTabla={"Tabla de especificaciones de Criba de grano de plata ligera"}
      descripcion={"Una criba de grano de plata ligera es un tamiz fabricado con malla de acero utilizado en la separación y clasificación de materiales, como granos y minerales. Este tipo de criba es conocida por su ligereza y durabilidad, lo que facilita su manejo y prolonga su vida útil en operaciones industriales y agrícolas. La 'plata' en su nombre puede referirse al acabado o revestimiento que mejora su resistencia a la corrosión. Su diseño permite una eficiente filtración y separación de partículas, optimizando los procesos de tamizado y clasificación."}
    />
  );
}

export default CribaGranoPlataLigeraPage;
