import VistaDetalleCorrugado from './VistaDetalleCorrugado.jsx';
import imagenConcertina from '../../../assets/Concertina.jpg';
import tablaConcertina from '../../../assets/Concertina comercial-20.png';

/**
 * Detalle del producto Concertina (Corrugados y Trefilados).
 */
function ConcertinaPage() {
  return (
    <VistaDetalleCorrugado
      nombre={"Concertina"}
      imagen={imagenConcertina}
      tabla={tablaConcertina}
      altImagen={"Concertina comercial con cuchillas tipo arpón"}
      altTabla={"Información de Concertina comercial"}
      descripcion={"Una concertina comercial es un tipo de alambre de púas en forma de espiral o bobina que se utiliza principalmente para seguridad perimetral. Está fabricada con láminas de acero y a menudo tiene púas afiladas o cuchillas que disuaden o impiden el acceso no autorizado. Las concertinas se despliegan y expanden fácilmente, formando barreras efectivas en zonas industriales, militares y residenciales. Son valoradas por su alta resistencia, durabilidad y capacidad de brindar una protección robusta en áreas vulnerables."}
    />
  );
}

export default ConcertinaPage;
