/**
 * Variante 03 — Formulario Content-Fit en Una Sola Línea — React / Next.js (TSX)
 * Archivo: components/forms/variants/content-fit-inline-bar/ContentFitInlineBar.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ContentFitInlineBar: React.FC<{ title?: string }> = ({
  title = 'Variante 03 — Formulario Content-Fit en Una Sola Línea'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-forms-content-fit-inline-bar" data-active={active}>
      <h3>{title}</h3>
      <p>Combina selector de prefijo, campo de texto y botón de envío en una sola cápsula compacta.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
