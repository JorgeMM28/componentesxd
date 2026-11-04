/**
 * Variante 14 — Buscador de Nodos + Matriz 2D con Onda Radial (stagger grid) — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/search-grid-2d-ripple/SearchGrid2dRipple.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const SearchGrid2dRipple: React.FC<{ title?: string }> = ({
  title = 'Variante 14 — Buscador de Nodos + Matriz 2D con Onda Radial (stagger grid)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-search-grid-2d-ripple" data-active={active}>
      <h3>{title}</h3>
      <p>Haz clic en cualquier nodo del cluster o filtra por estado para expandir una onda 2D desde ese punto exacto.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
