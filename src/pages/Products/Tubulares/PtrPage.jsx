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
      descripcion="PTR rectangular con longitud estándar de 6.10 m. Medidas y pesos teóricos por calibre; medidas mayores de 2&quot; y calibres más gruesos que calibre 12 en especificación ASTM A-500 Grado B."
    />
  );
}

export default PtrPage;
