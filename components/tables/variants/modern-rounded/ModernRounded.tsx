/**
 * Variante 01 — Tabla Moderna de Bordes Redondeados — React / Next.js (TSX)
 * Archivo: components/tables/variants/modern-rounded/ModernRounded.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ModernRounded: React.FC<{ title?: string }> = ({
  title = 'Variante 01 — Tabla Moderna de Bordes Redondeados'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-tables-modern-rounded" data-active={active}>
      <h3>{title}</h3>
      <p>Contenedor con radio amplio de 18px, cabeceras suaves tipo cápsula, avatares circulares y badges pastilla.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
