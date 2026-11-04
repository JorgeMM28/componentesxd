/**
 * Variante 03 — Medidores Circulares SVG con Control Deslizante en Vivo — React / Next.js (TSX)
 * Archivo: components/badges-data/variants/interactive-svg-gauges/InteractiveSvgGauges.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const InteractiveSvgGauges: React.FC<{ title?: string }> = ({
  title = 'Variante 03 — Medidores Circulares SVG con Control Deslizante en Vivo'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-badges-data-interactive-svg-gauges" data-active={active}>
      <h3>{title}</h3>
      <p>Mueve el control deslizante para actualizar en tiempo real el porcentaje y los anillos SVG.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
