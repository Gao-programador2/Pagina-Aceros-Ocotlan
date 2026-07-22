import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import AlertaFraude from '../components/common/AlertaFraude.jsx';

/**
 * Plantilla principal del sitio.
 * En /historia el navbar es sticky solo dentro del bloque de historia
 * (al llegar al footer ya no baja con el scroll).
 */
function MainLayout() {
  const { pathname, hash } = useLocation();
  const enHistoria = pathname === '/historia';

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      let intentos = 0;

      const irAlAncla = () => {
        const elemento = document.getElementById(id);
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      if (irAlAncla()) return undefined;

      const temporizador = window.setInterval(() => {
        intentos += 1;
        if (irAlAncla() || intentos >= 12) {
          window.clearInterval(temporizador);
        }
      }, 50);

      return () => window.clearInterval(temporizador);
    }

    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen max-w-full flex-col">
      <AlertaFraude />

      {enHistoria ? (
        <>
          {/* Contenedor: el sticky del navbar solo vive aquí, no llega al footer */}
          <div className="relative">
            <Navbar />
            <main className="min-w-0">
              <Outlet />
            </main>
          </div>
          <div className="overflow-x-clip">
            <Footer />
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <main className="min-w-0 flex-1 overflow-x-clip">
            <Outlet />
          </main>
          <div className="overflow-x-clip">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default MainLayout;
