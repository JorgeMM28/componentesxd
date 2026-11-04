/**
 * Variante 18 — Acordeón Técnico + Telemetría que Anima de 0% a 100% al Expandir — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/accordion-animated-metrics/AccordionAnimatedMetrics.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const AccordionAnimatedMetrics: React.FC<{ title?: string }> = ({
  title = 'Variante 18 — Acordeón Técnico + Telemetría que Anima de 0% a 100% al Expandir'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-accordion-animated-metrics" data-active={active}>
      <h3>{title}</h3>
      <p>Cada vez que abres una sección del acordeón, sus barras y métricas internas se animan dinámicamente.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
