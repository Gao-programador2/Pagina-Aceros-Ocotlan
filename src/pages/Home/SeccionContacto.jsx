import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

const CAMPO =
  'w-full rounded-md border border-steel-200 bg-white px-4 py-2.5 text-sm text-steel-800 placeholder-steel-400 outline-none transition-shadow focus:border-[#0d47a1] focus:ring-2 focus:ring-[#0d47a1]/20';

/** Clave de sitio: .env → VITE_RECAPTCHA_SITE_KEY (en dev usa la de prueba de Google si no hay .env) */
const RECAPTCHA_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_zXzJxlqG';

function SeccionContacto() {
  const [enviado, setEnviado] = useState(false);
  const [tokenCaptcha, setTokenCaptcha] = useState(null);
  const [errorCaptcha, setErrorCaptcha] = useState('');
  const captchaRef = useRef(null);

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    setErrorCaptcha('');

    if (!tokenCaptcha) {
      setErrorCaptcha('Completa el reCAPTCHA para continuar.');
      return;
    }

    // TODO: enviar tokenCaptcha al backend para verificar con la secret key
    setEnviado(true);
    setTokenCaptcha(null);
    captchaRef.current?.reset();
    evento.target.reset();
  };

  return (
    <section id="contacto" className="scroll-mt-28 bg-white">
      {/* Línea divisoria superior (apenas visible) */}
      <div className="h-px w-full bg-[#c5ccd6]" aria-hidden="true" />
      <div className="h-10 sm:h-14" aria-hidden="true" />

      {/* Contenedor del formulario */}
      <div className="border-y border-[#c5ccd6] bg-[#dce3eb]">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
          <h2 className="text-3xl font-semibold text-[#0d47a1] sm:text-4xl">Contáctanos</h2>

          <form onSubmit={manejarEnvio} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contacto-nombre" className="mb-1.5 block text-sm text-steel-800">
                  Nombre
                </label>
                <input
                  id="contacto-nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Ej. José López"
                  className={CAMPO}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="contacto-empresa" className="mb-1.5 block text-sm text-steel-800">
                  Empresa
                </label>
                <input
                  id="contacto-empresa"
                  name="empresa"
                  type="text"
                  placeholder="Nombre de la Empresa..."
                  className={CAMPO}
                  autoComplete="organization"
                />
              </div>
              <div>
                <label htmlFor="contacto-correo" className="mb-1.5 block text-sm text-steel-800">
                  Correo electrónico
                </label>
                <input
                  id="contacto-correo"
                  name="correo"
                  type="email"
                  required
                  placeholder="Ej. jose123@gmail.com"
                  className={CAMPO}
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="contacto-telefono" className="mb-1.5 block text-sm text-steel-800">
                  Teléfono
                </label>
                <input
                  id="contacto-telefono"
                  name="telefono"
                  type="tel"
                  required
                  placeholder="Ej. 123 123 1231"
                  className={CAMPO}
                  autoComplete="tel"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contacto-mensaje" className="mb-1.5 block text-sm text-steel-800">
                Mensaje
              </label>
              <textarea
                id="contacto-mensaje"
                name="mensaje"
                required
                rows={6}
                placeholder="Mensaje"
                className={`${CAMPO} resize-y`}
              />
            </div>

            <label className="flex items-start gap-2.5 text-sm text-steel-700">
              <input
                type="checkbox"
                name="privacidad"
                required
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-steel-300 text-[#0d47a1] focus:ring-[#0d47a1]"
              />
              <span>
                Acepto la{' '}
                <Link
                  to="/aviso-de-privacidad"
                  className="underline underline-offset-2 hover:text-[#0d47a1]"
                >
                  política de privacidad
                </Link>
              </span>
            </label>

            <div>
              <ReCAPTCHA
                ref={captchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={(token) => {
                  setTokenCaptcha(token);
                  setErrorCaptcha('');
                }}
                onExpired={() => setTokenCaptcha(null)}
                onErrored={() => {
                  setTokenCaptcha(null);
                  setErrorCaptcha('No se pudo cargar el reCAPTCHA. Revisa tu conexión e inténtalo de nuevo.');
                }}
                hl="es"
              />
              {errorCaptcha && (
                <p className="mt-2 text-sm text-red-600">{errorCaptcha}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#0d47a1] py-3.5 text-base font-medium text-white transition-colors hover:bg-[#0a3a85]"
            >
              Enviar
            </button>

            {enviado && (
              <p className="rounded-md bg-green-50 px-4 py-3 text-sm text-green-700">
                Mensaje enviado. Nos pondremos en contacto contigo pronto.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Franja blanca inferior + línea divisoria */}
      <div className="h-10 sm:h-14" aria-hidden="true" />
      <div className="h-px w-full bg-[#c5ccd6]" aria-hidden="true" />
    </section>
  );
}

export default SeccionContacto;
