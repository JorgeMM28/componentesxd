/**
 * Variante 04 — Toaster con Formulario de Respuesta Rápida — React / Next.js (TSX)
 * Archivo: components/toasts/variants/form-reply-toast/FormReplyToast.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const FormReplyToast: React.FC<{ title?: string }> = ({
  title = 'Variante 04 — Toaster con Formulario de Respuesta Rápida'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-toasts-form-reply-toast" data-active={active}>
      <h3>{title}</h3>
      <p>Incluye campo de texto e input de envío directo dentro de la notificación sin abrir otra página.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
