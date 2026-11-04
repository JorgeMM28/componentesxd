/**
 * Variante 03 — Navegación Styleless Minimalista con Indicador Deslizante — React / Next.js (TSX)
 * Archivo: components/navigation/variants/styleless-minimal-nav/StylelessMinimalNav.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const StylelessMinimalNav: React.FC<{ title?: string }> = ({
  title = 'Variante 03 — Navegación Styleless Minimalista con Indicador Deslizante'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-navigation-styleless-minimal-nav" data-active={active}>
      <h3>{title}</h3>
      <p>Pestañas limpias sin bordes laterales donde la línea activa viaja suavemente al elemento clicado.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
