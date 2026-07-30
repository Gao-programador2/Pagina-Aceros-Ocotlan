import { Component, lazy, Suspense } from 'react';
import BannerEncabezado from './BannerEncabezado.jsx';
import ListaProductos from './ListaProductos.jsx';
import BannerFerreteria from './BannerFerreteria.jsx';
import CarruselServicios from './CarruselServicios.jsx';
import ObrasConstruidas from './ObrasConstruidas.jsx';
import SeccionContacto from './SeccionContacto.jsx';
import BannerCertificacionISO from './BannerCertificacionISO.jsx';

const BranchesMap = lazy(() => import('./BranchesMap.jsx'));

class MapaErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <section id="sucursales" className="scroll-mt-28 bg-steel-50 px-4 py-14">
          <div className="mx-auto max-w-7xl rounded-2xl border border-steel-200 bg-white px-6 py-10 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-steel-900">Sucursales</h2>
            <p className="mt-2 text-sm text-steel-600">
              El mapa no pudo cargarse. Prueba de nuevo.
            </p>
            <button
              type="button"
              onClick={this.handleRetry}
              className="mt-4 rounded-lg bg-[#0d47a1] px-4 py-2 text-sm font-semibold text-white hover:bg-[#08306b]"
            >
              Reintentar mapa
            </button>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

function BranchesMapFallback() {
  return (
    <section id="sucursales" className="scroll-mt-28 bg-steel-50 px-4 py-14">
      <div className="mx-auto flex h-[420px] max-w-7xl items-center justify-center rounded-2xl border border-steel-200 bg-white text-sm text-steel-600 shadow-sm sm:h-[480px]">
        Cargando mapa de sucursales…
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <BannerEncabezado />
      <ListaProductos />
      <BannerFerreteria />
      <CarruselServicios />
      <ObrasConstruidas />
      <SeccionContacto />
      <MapaErrorBoundary>
        <Suspense fallback={<BranchesMapFallback />}>
          <BranchesMap />
        </Suspense>
      </MapaErrorBoundary>
      <BannerCertificacionISO />
    </>
  );
}

export default HomePage;
