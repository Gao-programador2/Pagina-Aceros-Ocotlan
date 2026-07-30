import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import HomePage from '../pages/Home/HomePage.jsx';

const ProductsPage = lazy(() => import('../pages/Products/ProductsPage.jsx'));
const ServicesPage = lazy(() => import('../pages/Services/ServicesPage.jsx'));
const BranchesPage = lazy(() => import('../pages/Branches/BranchesPage.jsx'));
const HistoryPage = lazy(() => import('../pages/History/HistoryPage.jsx'));
const BlogPage = lazy(() => import('../pages/Blog/BlogPage.jsx'));
const TransparenciaPage = lazy(() => import('../pages/Transparencia/TransparenciaPage.jsx'));
const IrregularidadesPage = lazy(
  () => import('../pages/Transparencia/IrregularidadesPage.jsx'),
);
const FraudesPage = lazy(() => import('../pages/Transparencia/FraudesPage.jsx'));
const BolsaTrabajoPage = lazy(() => import('../pages/BolsaTrabajo/BolsaTrabajoPage.jsx'));
const TerminosCondicionesPage = lazy(
  () => import('../pages/Legal/TerminosCondicionesPage.jsx'),
);
const AvisoPrivacidadPage = lazy(
  () => import('../pages/Legal/AvisoPrivacidadPage.jsx'),
);
const SearchPage = lazy(() => import('../pages/Search/SearchPage.jsx'));
const ContactPage = lazy(() => import('../pages/Contact/ContactPage.jsx'));
const FabricacionPolinPage = lazy(() => import('../pages/Services/FabricacionPolinPage.jsx'));
const AcanaladoLaminaPage = lazy(() => import('../pages/Services/AcanaladoLaminaPage.jsx'));
const HabilitadoVarillaPage = lazy(() => import('../pages/Services/HabilitadoVarillaPage.jsx'));
const CizallaPage = lazy(() => import('../pages/Services/CizallaPage.jsx'));
const NiveladoPage = lazy(() => import('../pages/Services/NiveladoPage.jsx'));
const CorteSlitterPage = lazy(() => import('../pages/Services/CorteSlitterPage.jsx'));
const ComercialesPage = lazy(() => import('../pages/Products/ComercialesPage.jsx'));
const CorrugadosTrefiladosPage = lazy(
  () => import('../pages/Products/CorrugadosTrefiladosPage.jsx'),
);
const GalvanizadosPage = lazy(() => import('../pages/Products/GalvanizadosPage.jsx'));
const ClavosPage = lazy(() => import('../pages/Products/Galvanizados/ClavosPage.jsx'));
const GrapasPage = lazy(() => import('../pages/Products/Galvanizados/GrapasPage.jsx'));
const EstructuralesPage = lazy(() => import('../pages/Products/EstructuralesPage.jsx'));
const AngulosEstructuralesPage = lazy(
  () => import('../pages/Products/Estructurales/AngulosEstructuralesPage.jsx'),
);
const CanalesPage = lazy(() => import('../pages/Products/Estructurales/CanalesPage.jsx'));
const HssCuadradoPage = lazy(() => import('../pages/Products/Estructurales/HssCuadradoPage.jsx'));
const HssRectangularPage = lazy(
  () => import('../pages/Products/Estructurales/HssRectangularPage.jsx'),
);
const PlacasPage = lazy(() => import('../pages/Products/Estructurales/PlacasPage.jsx'));
const VigaIprPage = lazy(() => import('../pages/Products/Estructurales/VigaIprPage.jsx'));
const VigaIpsPage = lazy(() => import('../pages/Products/Estructurales/VigaIpsPage.jsx'));
const TubularesPage = lazy(() => import('../pages/Products/TubularesPage.jsx'));
const LaminaGalvanizadaPage = lazy(
  () => import('../pages/Products/Tubulares/LaminaGalvanizadaPage.jsx'),
);
const PerfilTubularPage = lazy(() => import('../pages/Products/Tubulares/PerfilTubularPage.jsx'));
const PtrPage = lazy(() => import('../pages/Products/Tubulares/PtrPage.jsx'));
const TuboCedulaPage = lazy(() => import('../pages/Products/Tubulares/TuboCedulaPage.jsx'));
const TuboConduccionFluidosPage = lazy(
  () => import('../pages/Products/Tubulares/TuboConduccionFluidosPage.jsx'),
);
const TuboEstructuralPage = lazy(
  () => import('../pages/Products/Tubulares/TuboEstructuralPage.jsx'),
);
const PlanosPage = lazy(() => import('../pages/Products/PlanosPage.jsx'));
const LaminaAntiderrapantePage = lazy(
  () => import('../pages/Products/Planos/LaminaAntiderrapantePage.jsx'),
);
const LaminaNegraPage = lazy(() => import('../pages/Products/Planos/LaminaNegraPage.jsx'));
const LaminaGalvanizadaPlanosPage = lazy(
  () => import('../pages/Products/Planos/LaminaGalvanizadaPlanosPage.jsx'),
);
const PlacasPlanosPage = lazy(() => import('../pages/Products/Planos/PlacasPlanosPage.jsx'));
const AlambrePuasPage = lazy(() => import('../pages/Products/Corrugados/AlambrePuasPage.jsx'));
const AlambreGalvanizadoPage = lazy(
  () => import('../pages/Products/Corrugados/AlambreGalvanizadoPage.jsx'),
);
const AlambreRecocidoPage = lazy(
  () => import('../pages/Products/Corrugados/AlambreRecocidoPage.jsx'),
);
const AlambronPage = lazy(() => import('../pages/Products/Corrugados/AlambronPage.jsx'));
const CastilloArmexPage = lazy(() => import('../pages/Products/Corrugados/CastilloArmexPage.jsx'));
const ConcertinaPage = lazy(() => import('../pages/Products/Corrugados/ConcertinaPage.jsx'));
const CribaGranoPlataLigeraPage = lazy(
  () => import('../pages/Products/Corrugados/CribaGranoPlataLigeraPage.jsx'),
);
const MallaBorregueraPage = lazy(
  () => import('../pages/Products/Corrugados/MallaBorregueraPage.jsx'),
);
const MallaCribaOrnamentalPage = lazy(
  () => import('../pages/Products/Corrugados/MallaCribaOrnamentalPage.jsx'),
);
const MallaDePajaroPage = lazy(() => import('../pages/Products/Corrugados/MallaDePajaroPage.jsx'));
const MultimallaFerreteraPage = lazy(
  () => import('../pages/Products/Corrugados/MultimallaFerreteraPage.jsx'),
);
const VarillaCorrugadaPage = lazy(
  () => import('../pages/Products/Corrugados/VarillaCorrugadaPage.jsx'),
);
const RedondosPage = lazy(() => import('../pages/Products/Comerciales/RedondosPage.jsx'));
const CuadradosPage = lazy(() => import('../pages/Products/Comerciales/CuadradosPage.jsx'));
const TeeZetaPage = lazy(() => import('../pages/Products/Comerciales/TeeZetaPage.jsx'));
const PolinMontenPage = lazy(() => import('../pages/Products/Comerciales/PolinMontenPage.jsx'));
const SolerasPage = lazy(() => import('../pages/Products/Comerciales/SolerasPage.jsx'));

function PageFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-4 text-sm text-steel-600">
      Cargando…
    </div>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/categoria-producto/productos" element={<ProductsPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/sucursales" element={<BranchesPage />} />
            <Route path="/historia" element={<HistoryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/transparencia-ao" element={<TransparenciaPage />} />
            <Route path="/transparencia-ao/" element={<TransparenciaPage />} />
            <Route
              path="/transparencia-ao/irregularidades"
              element={<IrregularidadesPage />}
            />
            <Route path="/transparencia-ao/fraudes" element={<FraudesPage />} />
            <Route path="/bolsa-de-trabajo" element={<BolsaTrabajoPage />} />
            <Route path="/terminos-y-condiciones" element={<TerminosCondicionesPage />} />
            <Route path="/aviso-de-privacidad" element={<AvisoPrivacidadPage />} />
            <Route path="/buscar" element={<SearchPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route
              path="/categoria-producto/productos/comerciales"
              element={<ComercialesPage />}
            />
            <Route path="/productos/comerciales" element={<ComercialesPage />} />
            <Route
              path="/categoria-producto/productos/comerciales/redondos"
              element={<RedondosPage />}
            />
            <Route path="/productos/comerciales/redondos" element={<RedondosPage />} />
            <Route
              path="/categoria-producto/productos/comerciales/cuadrados"
              element={<CuadradosPage />}
            />
            <Route path="/productos/comerciales/cuadrados" element={<CuadradosPage />} />
            <Route
              path="/categoria-producto/productos/comerciales/tee-y-zeta"
              element={<TeeZetaPage />}
            />
            <Route path="/productos/comerciales/tee-y-zeta" element={<TeeZetaPage />} />
            <Route
              path="/categoria-producto/productos/comerciales/polin-monten"
              element={<PolinMontenPage />}
            />
            <Route
              path="/productos/comerciales/polin-monten"
              element={<PolinMontenPage />}
            />
            <Route
              path="/categoria-producto/productos/comerciales/soleras"
              element={<SolerasPage />}
            />
            <Route path="/productos/comerciales/soleras" element={<SolerasPage />} />
            <Route
              path="/categoria-producto/productos/galvanizados"
              element={<GalvanizadosPage />}
            />
            <Route path="/productos/galvanizados" element={<GalvanizadosPage />} />
            <Route
              path="/categoria-producto/productos/galvanizados/clavos"
              element={<ClavosPage />}
            />
            <Route path="/productos/galvanizados/clavos" element={<ClavosPage />} />
            <Route
              path="/categoria-producto/productos/galvanizados/grapas"
              element={<GrapasPage />}
            />
            <Route path="/productos/galvanizados/grapas" element={<GrapasPage />} />
            <Route
              path="/categoria-producto/productos/estructurales"
              element={<EstructuralesPage />}
            />
            <Route path="/productos/estructurales" element={<EstructuralesPage />} />
            <Route
              path="/categoria-producto/productos/estructurales/angulos"
              element={<AngulosEstructuralesPage />}
            />
            <Route
              path="/productos/estructurales/angulos"
              element={<AngulosEstructuralesPage />}
            />
            <Route
              path="/categoria-producto/productos/estructurales/canales"
              element={<CanalesPage />}
            />
            <Route path="/productos/estructurales/canales" element={<CanalesPage />} />
            <Route
              path="/categoria-producto/productos/estructurales/hss-cuadrado"
              element={<HssCuadradoPage />}
            />
            <Route
              path="/productos/estructurales/hss-cuadrado"
              element={<HssCuadradoPage />}
            />
            <Route
              path="/categoria-producto/productos/estructurales/hss-rectangular"
              element={<HssRectangularPage />}
            />
            <Route
              path="/productos/estructurales/hss-rectangular"
              element={<HssRectangularPage />}
            />
            <Route
              path="/categoria-producto/productos/estructurales/placas"
              element={<PlacasPage />}
            />
            <Route path="/productos/estructurales/placas" element={<PlacasPage />} />
            <Route
              path="/categoria-producto/productos/estructurales/viga-ipr"
              element={<VigaIprPage />}
            />
            <Route path="/productos/estructurales/viga-ipr" element={<VigaIprPage />} />
            <Route
              path="/categoria-producto/productos/estructurales/viga-ips"
              element={<VigaIpsPage />}
            />
            <Route path="/productos/estructurales/viga-ips" element={<VigaIpsPage />} />
            <Route
              path="/categoria-producto/productos/perfiles-tubulares-y-tuberias"
              element={<TubularesPage />}
            />
            <Route
              path="/productos/perfiles-tubulares-y-tuberias"
              element={<TubularesPage />}
            />
            <Route
              path="/categoria-producto/productos/perfiles-tubulares-y-tuberias/lamina-galvanizada"
              element={<LaminaGalvanizadaPage />}
            />
            <Route
              path="/productos/perfiles-tubulares-y-tuberias/lamina-galvanizada"
              element={<LaminaGalvanizadaPage />}
            />
            <Route
              path="/categoria-producto/productos/perfiles-tubulares-y-tuberias/perfil-tubular"
              element={<PerfilTubularPage />}
            />
            <Route
              path="/productos/perfiles-tubulares-y-tuberias/perfil-tubular"
              element={<PerfilTubularPage />}
            />
            <Route
              path="/categoria-producto/productos/perfiles-tubulares-y-tuberias/ptr"
              element={<PtrPage />}
            />
            <Route path="/productos/perfiles-tubulares-y-tuberias/ptr" element={<PtrPage />} />
            <Route
              path="/categoria-producto/productos/perfiles-tubulares-y-tuberias/tubo-cedula"
              element={<TuboCedulaPage />}
            />
            <Route
              path="/productos/perfiles-tubulares-y-tuberias/tubo-cedula"
              element={<TuboCedulaPage />}
            />
            <Route
              path="/categoria-producto/productos/perfiles-tubulares-y-tuberias/tubo-conduccion-de-fluidos"
              element={<TuboConduccionFluidosPage />}
            />
            <Route
              path="/productos/perfiles-tubulares-y-tuberias/tubo-conduccion-de-fluidos"
              element={<TuboConduccionFluidosPage />}
            />
            <Route
              path="/categoria-producto/productos/perfiles-tubulares-y-tuberias/tubo-estructural"
              element={<TuboEstructuralPage />}
            />
            <Route
              path="/productos/perfiles-tubulares-y-tuberias/tubo-estructural"
              element={<TuboEstructuralPage />}
            />
            <Route
              path="/categoria-producto/productos/planos"
              element={<PlanosPage />}
            />
            <Route path="/productos/planos" element={<PlanosPage />} />
            <Route
              path="/categoria-producto/productos/planos/lamina-antiderrapante"
              element={<LaminaAntiderrapantePage />}
            />
            <Route
              path="/productos/planos/lamina-antiderrapante"
              element={<LaminaAntiderrapantePage />}
            />
            <Route
              path="/categoria-producto/productos/planos/lamina-negra"
              element={<LaminaNegraPage />}
            />
            <Route path="/productos/planos/lamina-negra" element={<LaminaNegraPage />} />
            <Route
              path="/categoria-producto/productos/planos/lamina-galvanizada"
              element={<LaminaGalvanizadaPlanosPage />}
            />
            <Route
              path="/productos/planos/lamina-galvanizada"
              element={<LaminaGalvanizadaPlanosPage />}
            />
            <Route
              path="/categoria-producto/productos/planos/placas"
              element={<PlacasPlanosPage />}
            />
            <Route path="/productos/planos/placas" element={<PlacasPlanosPage />} />
            <Route
              path="/categoria-producto/productos/corrugados-y-trefilados"
              element={<CorrugadosTrefiladosPage />}
            />
            <Route
              path="/productos/corrugados-y-trefilados"
              element={<CorrugadosTrefiladosPage />}
            />
            <Route
              path="/categoria-producto/productos/corrugados-y-trefilados/alambre-de-puas"
              element={<AlambrePuasPage />}
            />
            <Route
              path="/productos/corrugados-y-trefilados/alambre-de-puas"
              element={<AlambrePuasPage />}
            />
            <Route
              path="/categoria-producto/productos/corrugados-y-trefilados/alambre-galvanizado"
              element={<AlambreGalvanizadoPage />}
            />
            <Route
              path="/productos/corrugados-y-trefilados/alambre-galvanizado"
              element={<AlambreGalvanizadoPage />}
            />
            <Route
              path="/categoria-producto/productos/corrugados-y-trefilados/alambre-recocido"
              element={<AlambreRecocidoPage />}
            />
            <Route
              path="/productos/corrugados-y-trefilados/alambre-recocido"
              element={<AlambreRecocidoPage />}
            />
            <Route
              path="/categoria-producto/productos/corrugados-y-trefilados/alambron"
              element={<AlambronPage />}
            />
            <Route path="/productos/corrugados-y-trefilados/alambron" element={<AlambronPage />} />
            <Route
              path="/categoria-producto/productos/corrugados-y-trefilados/castillo-armex"
              element={<CastilloArmexPage />}
            />
            <Route
              path="/productos/corrugados-y-trefilados/castillo-armex"
              element={<CastilloArmexPage />}
            />
            <Route
              path="/categoria-producto/productos/corrugados-y-trefilados/concertina"
              element={<ConcertinaPage />}
            />
            <Route
              path="/productos/corrugados-y-trefilados/concertina"
              element={<ConcertinaPage />}
            />
            <Route
              path="/categoria-producto/productos/corrugados-y-trefilados/criba-grano-de-plata-ligera"
              element={<CribaGranoPlataLigeraPage />}
            />
            <Route
              path="/productos/corrugados-y-trefilados/criba-grano-de-plata-ligera"
              element={<CribaGranoPlataLigeraPage />}
            />
            <Route
              path="/categoria-producto/productos/corrugados-y-trefilados/malla-borreguera"
              element={<MallaBorregueraPage />}
            />
            <Route
              path="/productos/corrugados-y-trefilados/malla-borreguera"
              element={<MallaBorregueraPage />}
            />
            <Route
              path="/categoria-producto/productos/corrugados-y-trefilados/malla-criba-ornamental"
              element={<MallaCribaOrnamentalPage />}
            />
            <Route
              path="/productos/corrugados-y-trefilados/malla-criba-ornamental"
              element={<MallaCribaOrnamentalPage />}
            />
            <Route
              path="/categoria-producto/productos/corrugados-y-trefilados/malla-de-pajaro"
              element={<MallaDePajaroPage />}
            />
            <Route
              path="/productos/corrugados-y-trefilados/malla-de-pajaro"
              element={<MallaDePajaroPage />}
            />
            <Route
              path="/categoria-producto/productos/corrugados-y-trefilados/multimalla-ferretera"
              element={<MultimallaFerreteraPage />}
            />
            <Route
              path="/productos/corrugados-y-trefilados/multimalla-ferretera"
              element={<MultimallaFerreteraPage />}
            />
            <Route
              path="/categoria-producto/productos/corrugados-y-trefilados/varilla-corrugada"
              element={<VarillaCorrugadaPage />}
            />
            <Route
              path="/productos/corrugados-y-trefilados/varilla-corrugada"
              element={<VarillaCorrugadaPage />}
            />
            <Route
              path="/categoria-producto/servicios/fabricacion-de-polin"
              element={<FabricacionPolinPage />}
            />
            <Route path="/servicios/fabricacion-de-polin" element={<FabricacionPolinPage />} />
            <Route
              path="/categoria-producto/servicios/acanalado-de-lamina"
              element={<AcanaladoLaminaPage />}
            />
            <Route path="/servicios/acanalado-de-lamina" element={<AcanaladoLaminaPage />} />
            <Route
              path="/categoria-producto/servicios/habilitado-de-varilla"
              element={<HabilitadoVarillaPage />}
            />
            <Route path="/servicios/habilitado-de-varilla" element={<HabilitadoVarillaPage />} />
            <Route path="/categoria-producto/servicios/cizalla" element={<CizallaPage />} />
            <Route path="/servicios/cizalla" element={<CizallaPage />} />
            <Route path="/categoria-producto/servicios/nivelado" element={<NiveladoPage />} />
            <Route path="/servicios/nivelado" element={<NiveladoPage />} />
            <Route
              path="/categoria-producto/servicios/corte-slitter"
              element={<CorteSlitterPage />}
            />
            <Route path="/servicios/corte-slitter" element={<CorteSlitterPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
