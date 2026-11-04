/**
 * Variante 01 — Navbar con Menú en Cascada Multi-Nivel (Estilo Microsoft) — React / Next.js (TSX)
 * Archivo: components/navigation/variants/microsoft-cascade-nav/MicrosoftCascadeNav.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const MicrosoftCascadeNav: React.FC<{ title?: string }> = ({
  title = 'Variante 01 — Navbar con Menú en Cascada Multi-Nivel (Estilo Microsoft)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-navigation-microsoft-cascade-nav" data-active={active}>
      <h3>{title}</h3>
      <p>Selecciona una categoría principal para desplegar sus sub-categorías y luego sus variantes finales.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
