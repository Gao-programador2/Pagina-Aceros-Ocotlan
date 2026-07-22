import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import HomePage from '../pages/Home/HomePage.jsx';
import ProductsPage from '../pages/Products/ProductsPage.jsx';
import BranchesPage from '../pages/Branches/BranchesPage.jsx';
import HistoryPage from '../pages/History/HistoryPage.jsx';
import BlogPage from '../pages/Blog/BlogPage.jsx';
import ContactPage from '../pages/Contact/ContactPage.jsx';
import FabricacionPolinPage from '../pages/Services/FabricacionPolinPage.jsx';
import AcanaladoLaminaPage from '../pages/Services/AcanaladoLaminaPage.jsx';
import HabilitadoVarillaPage from '../pages/Services/HabilitadoVarillaPage.jsx';
import CizallaPage from '../pages/Services/CizallaPage.jsx';
import NiveladoPage from '../pages/Services/NiveladoPage.jsx';
import CorteSlitterPage from '../pages/Services/CorteSlitterPage.jsx';
import ComercialesPage from '../pages/Products/ComercialesPage.jsx';
import RedondosPage from '../pages/Products/Comerciales/RedondosPage.jsx';
import CuadradosPage from '../pages/Products/Comerciales/CuadradosPage.jsx';
import TeeZetaPage from '../pages/Products/Comerciales/TeeZetaPage.jsx';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/sucursales" element={<BranchesPage />} />
          <Route path="/historia" element={<HistoryPage />} />
          <Route path="/blog" element={<BlogPage />} />
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
    </BrowserRouter>
  );
}

export default AppRoutes;
