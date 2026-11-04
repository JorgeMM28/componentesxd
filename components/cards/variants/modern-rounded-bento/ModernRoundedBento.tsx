/**
 * Variante 01 — Tarjeta Moderna Bordes Redondeados + Luz Radial — React / Next.js (TSX)
 * Archivo: components/cards/variants/modern-rounded-bento/ModernRoundedBento.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ModernRoundedBento: React.FC<{ title?: string }> = ({
  title = 'Variante 01 — Tarjeta Moderna Bordes Redondeados + Luz Radial'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-cards-modern-rounded-bento" data-active={active}>
      <h3>{title}</h3>
      <p>Radio suave de 20px, iluminación que sigue al cursor, insignia superior y métrica destacada.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
