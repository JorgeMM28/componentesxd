/**
 * Variante 08 — Toaster Interactivo de Subida de Archivos — React / Next.js (TSX)
 * Archivo: components/toasts/variants/upload-progress-toaster/UploadProgressToaster.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const UploadProgressToaster: React.FC<{ title?: string }> = ({
  title = 'Variante 08 — Toaster Interactivo de Subida de Archivos'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-toasts-upload-progress-toaster" data-active={active}>
      <h3>{title}</h3>
      <p>Simula la subida de múltiples archivos con porcentaje animado en tiempo real y botón de pausa/reinicio.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
