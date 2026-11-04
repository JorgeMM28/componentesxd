/**
 * Variante 01 — Colección de Badges Modernos, Outline y Con Punto Pulsante — React / Next.js (TSX)
 * Archivo: components/badges-data/variants/modern-pulse-badges/ModernPulseBadges.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ModernPulseBadges: React.FC<{ title?: string }> = ({
  title = 'Variante 01 — Colección de Badges Modernos, Outline y Con Punto Pulsante'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-badges-data-modern-pulse-badges" data-active={active}>
      <h3>{title}</h3>
      <p>Insignias redondeadas, cuadradas, sin bordes y con botón de cierre eliminable en vivo.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
