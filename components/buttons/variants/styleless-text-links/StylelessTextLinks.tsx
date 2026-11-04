/**
 * Variante 02 — Botones Styleless (Subrayado Cinético sin Caja) — React / Next.js (TSX)
 * Archivo: components/buttons/variants/styleless-text-links/StylelessTextLinks.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const StylelessTextLinks: React.FC<{ title?: string }> = ({
  title = 'Variante 02 — Botones Styleless (Subrayado Cinético sin Caja)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-buttons-styleless-text-links" data-active={active}>
      <h3>{title}</h3>
      <p>Cero bordes ni fondos: línea inferior que crece de izquierda a derecha y flecha SVG que avanza al pasar el cursor.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
