import BannerEncabezado from './BannerEncabezado.jsx';
import ListaProductos from './ListaProductos.jsx';
import BannerFerreteria from './BannerFerreteria.jsx';
import CarruselServicios from './CarruselServicios.jsx';
import ObrasConstruidas from './ObrasConstruidas.jsx';
import SeccionContacto from './SeccionContacto.jsx';
import BranchesMap from './BranchesMap.jsx';
import BannerCertificacionISO from './BannerCertificacionISO.jsx';

function HomePage() {
  return (
    <>
      <BannerEncabezado />
      <ListaProductos />
      <BannerFerreteria />
      <CarruselServicios />
      <ObrasConstruidas />
      <SeccionContacto />
      <BranchesMap />
      <BannerCertificacionISO />
    </>
  );
}

export default HomePage;
