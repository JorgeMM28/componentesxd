/**
 * Variante 02 — Inputs Styleless (Solo Línea Inferior Minimalista) — React / Next.js (TSX)
 * Archivo: components/forms/variants/styleless-underline-inputs/StylelessUnderlineInputs.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const StylelessUnderlineInputs: React.FC<{ title?: string }> = ({
  title = 'Variante 02 — Inputs Styleless (Solo Línea Inferior Minimalista)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-forms-styleless-underline-inputs" data-active={active}>
      <h3>{title}</h3>
      <p>Sin cajas laterales ni fondo: únicamente una línea inferior que se ilumina al escribir.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
