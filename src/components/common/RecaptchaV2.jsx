import { useEffect, useRef } from 'react';

const SCRIPT_ID = 'google-recaptcha-v2-script';

function cargarScriptRecaptcha(hl = 'es') {
  if (document.getElementById(SCRIPT_ID)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=explicit&hl=${hl}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('No se pudo cargar el script de reCAPTCHA'));
    document.head.appendChild(script);
  });
}

function esperarGrecaptcha() {
  return new Promise((resolve) => {
    const intentar = () => {
      if (window.grecaptcha?.render) {
        window.grecaptcha.ready(() => resolve(window.grecaptcha));
        return;
      }
      window.setTimeout(intentar, 50);
    };
    intentar();
  });
}

/**
 * reCAPTCHA v2 checkbox con render explícito (más estable que el wrapper en React 19).
 */
function RecaptchaV2({ sitekey, onChange, onExpired, onError, hl = 'es' }) {
  const contenedorRef = useRef(null);
  const widgetIdRef = useRef(null);
  const callbacksRef = useRef({ onChange, onExpired, onError });

  callbacksRef.current = { onChange, onExpired, onError };

  useEffect(() => {
    let cancelado = false;

    async function montar() {
      if (!sitekey || !contenedorRef.current) return;
      if (widgetIdRef.current !== null) return;

      try {
        await cargarScriptRecaptcha(hl);
        const grecaptcha = await esperarGrecaptcha();
        if (cancelado || !contenedorRef.current) return;

        // Evita render duplicado en el mismo nodo
        if (contenedorRef.current.dataset.widgetRendered === '1') return;

        widgetIdRef.current = grecaptcha.render(contenedorRef.current, {
          sitekey,
          theme: 'light',
          size: 'normal',
          callback: (token) => callbacksRef.current.onChange?.(token),
          'expired-callback': () => callbacksRef.current.onExpired?.(),
          'error-callback': () => callbacksRef.current.onError?.(),
        });
        contenedorRef.current.dataset.widgetRendered = '1';
      } catch {
        callbacksRef.current.onError?.();
      }
    }

    montar();

    return () => {
      cancelado = true;
    };
  }, [sitekey, hl]);

  return <div ref={contenedorRef} className="g-recaptcha" />;
}

export default RecaptchaV2;
