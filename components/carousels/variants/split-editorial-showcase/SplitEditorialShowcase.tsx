/**
 * Variante 05 — Carrusel Split-Screen Sincronizado (Arte Visual + Especificaciones) — React / Next.js (TSX)
 * Archivo: components/carousels/variants/split-editorial-showcase/SplitEditorialShowcase.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const SplitEditorialShowcase: React.FC<{ title?: string }> = ({
  title = 'Variante 05 — Carrusel Split-Screen Sincronizado (Arte Visual + Especificaciones)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-carousels-split-editorial-showcase" data-active={active}>
      <h3>{title}</h3>
      <p>Doble panel donde el lienzo visual izquierdo y la ficha técnica derecha se actualizan de forma coordinada con stagger.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
