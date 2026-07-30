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
      descripcion={"Concertina comercial galvanizada con cuchillas tipo arpón de filo de bisturí, fabricada para protección en bardas y cercas de residencias, deportivos, aeropuertos, bodegas y más. Se empaca en cajas de cartón para un manejo seguro."}
    />
  );
}

export default ConcertinaPage;
