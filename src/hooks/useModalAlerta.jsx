import { useCallback, useState } from 'react';
import ModalAlerta from '../components/common/ModalAlerta.jsx';

/**
 * @typedef {'error'|'advertencia'|'exito'|'info'} TipoAlerta
 * @typedef {{ tipo?: TipoAlerta, titulo: string, mensaje: string, textoBoton?: string }} OpcionesAlerta
 */

const MENSAJES_CAMPO = {
  tipopersona: 'Indica si eres colaborador de GAO o cliente/proveedor.',
  sucursal: 'Ingresa la sucursal o lugar donde sucedieron los hechos.',
  narracion: 'Escribe la narración de los hechos con el mayor detalle posible.',
  enlacefraudulento: 'Comparte el enlace de la red social o sitio fraudulento.',
  nombre: 'Ingresa tu nombre.',
  correo: 'Ingresa un correo electrónico válido.',
  telefono: 'Ingresa un número de teléfono.',
  mensaje: 'Escribe tu mensaje.',
  privacidad: 'Debes aceptar la política de privacidad para continuar.',
};

/**
 * @param {HTMLFormElement} formulario
 * @returns {string|null}
 */
export function mensajePrimerCampoInvalido(formulario) {
  const invalido = formulario.querySelector(':invalid');
  if (!invalido) return null;

  const nombre = (invalido.name || invalido.id || '').toLowerCase();
  for (const [clave, texto] of Object.entries(MENSAJES_CAMPO)) {
    if (nombre.includes(clave)) return texto;
  }

  if (invalido.type === 'radio') {
    return 'Selecciona una opción para continuar.';
  }

  return 'Completa los campos obligatorios marcados en el formulario.';
}

export function useModalAlerta() {
  const [alerta, setAlerta] = useState(null);

  const mostrarAlerta = useCallback((opciones) => {
    setAlerta({ ...opciones, abierta: true });
  }, []);

  const cerrarAlerta = useCallback(() => {
    setAlerta(null);
  }, []);

  const ModalAlertaFormulario = useCallback(
    () =>
      alerta ? (
        <ModalAlerta
          abierta={alerta.abierta}
          onCerrar={cerrarAlerta}
          tipo={alerta.tipo}
          titulo={alerta.titulo}
          mensaje={alerta.mensaje}
          textoBoton={alerta.textoBoton}
        />
      ) : null,
    [alerta, cerrarAlerta],
  );

  return { alerta, mostrarAlerta, cerrarAlerta, ModalAlertaFormulario };
}

/**
 * @param {string} mensaje
 * @param {'archivo'|'formulario'|'envio'} [contexto]
 */
export function alertaDesdeError(mensaje, contexto = 'envio') {
  const texto = String(mensaje || '').trim();

  if (contexto === 'archivo' || /archivo|pdf|jpg|adjunt|8 mb|antivirus/i.test(texto)) {
    return {
      tipo: 'advertencia',
      titulo: 'No pudimos usar ese archivo',
      mensaje:
        texto ||
        'Solo se permiten archivos PDF o JPG (máximo 8 archivos de 8 MB cada uno). Verifica el formato e inténtalo de nuevo.',
    };
  }

  if (contexto === 'formulario') {
    return {
      tipo: 'error',
      titulo: 'Faltan datos por completar',
      mensaje: texto || 'Revisa los campos obligatorios antes de enviar.',
    };
  }

  return {
    tipo: 'error',
    titulo: 'No se pudo enviar',
    mensaje: texto || 'Ocurrió un error al enviar. Intenta de nuevo en unos momentos.',
  };
}
