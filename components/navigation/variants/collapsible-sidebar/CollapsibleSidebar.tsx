/**
 * Variante 07 — Sidebar Lateral Colapsable con Árbol de Proyectos y Estado de Clúster — React / Next.js (TSX)
 * Archivo: components/navigation/variants/collapsible-sidebar/CollapsibleSidebar.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const CollapsibleSidebar: React.FC<{ title?: string }> = ({
  title = 'Variante 07 — Sidebar Lateral Colapsable con Árbol de Proyectos y Estado de Clúster'
}) => {
  const [active, setActive] = useState(false);
  return (
    <nav className="cxd-navigation-collapsible-sidebar" data-active={active}>
      <h3>{title}</h3>
      <p>Panel de navegación lateral con botón de colapso cinético (240px ↔ 68px), selector de entorno (Prod/Staging), árbol de módulos e indicador de salud.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </nav>
  );
};
