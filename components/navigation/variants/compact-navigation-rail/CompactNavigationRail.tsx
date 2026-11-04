/**
 * Variante 09 — Navigation Rail Ultra-Compacto con Tooltips y Puntos Activos — React / Next.js (TSX)
 * Archivo: components/navigation/variants/compact-navigation-rail/CompactNavigationRail.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const CompactNavigationRail: React.FC<{ title?: string }> = ({
  title = 'Variante 09 — Navigation Rail Ultra-Compacto con Tooltips y Puntos Activos'
}) => {
  const [active, setActive] = useState(false);
  return (
    <nav className="cxd-navigation-compact-navigation-rail" data-active={active}>
      <h3>{title}</h3>
      <p>Riel de navegación vertical ultra-delgado de 56px para consolas cloud con iconos vectoriales, tooltips flotantes e indicador de nodo activo.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </nav>
  );
};
