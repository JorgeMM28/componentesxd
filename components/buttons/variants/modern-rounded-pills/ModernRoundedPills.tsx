/**
 * Variante 01 — Botones Modernos Redondeados (Píldora & Glow) — React / Next.js (TSX)
 * Archivo: components/buttons/variants/modern-rounded-pills/ModernRoundedPills.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ModernRoundedPills: React.FC<{ title?: string }> = ({
  title = 'Variante 01 — Botones Modernos Redondeados (Píldora & Glow)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-buttons-modern-rounded-pills" data-active={active}>
      <h3>{title}</h3>
      <p>Bordes completamente redondeados (999px), degradado sutil, sombra difusa y micro-escala al hacer clic.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
