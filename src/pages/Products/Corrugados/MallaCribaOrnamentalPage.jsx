import VistaDetalleCorrugado from './VistaDetalleCorrugado.jsx';
import imagenMallaCriba from '../../../assets/Malla criba ornamental.jpg';
import tablaMallaCriba from '../../../assets/malla criba ornamental galvanizada-23.png';

/**
 * Detalle del producto Malla criba ornamental (Corrugados y Trefilados).
 */
function MallaCribaOrnamentalPage() {
  return (
    <VistaDetalleCorrugado
      nombre={"Malla criba ornamental"}
      imagen={imagenMallaCriba}
      tabla={tablaMallaCriba}
      altImagen={"Rollo de malla criba ornamental galvanizada"}
      altTabla={"Tabla de especificaciones de Malla criba ornamental galvanizada"}
      descripcion={"Malla criba ornamental galvanizada para protección y acabados. Disponible en aberturas de 50×50 mm y 38×38 mm, calibre 10.5, en rollos de 10 m de largo."}
    />
  );
}

export default MallaCribaOrnamentalPage;
