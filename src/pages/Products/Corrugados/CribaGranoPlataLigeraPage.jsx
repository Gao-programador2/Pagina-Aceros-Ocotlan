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
      descripcion={"Criba de grano de plata ligera galvanizada, con distintas aberturas y diámetros de alambre. Ideal para filtrado, cribado y usos industriales ligeros en rollos de 30 m."}
    />
  );
}

export default CribaGranoPlataLigeraPage;
