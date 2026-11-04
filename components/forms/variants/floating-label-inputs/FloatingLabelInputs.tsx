/**
 * Variante 04 — Inputs con Etiqueta Flotante Animada — React / Next.js (TSX)
 * Archivo: components/forms/variants/floating-label-inputs/FloatingLabelInputs.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const FloatingLabelInputs: React.FC<{ title?: string }> = ({
  title = 'Variante 04 — Inputs con Etiqueta Flotante Animada'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-forms-floating-label-inputs" data-active={active}>
      <h3>{title}</h3>
      <p>La etiqueta viaja suavemente hacia el borde superior cuando haces clic o escribes contenido.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
