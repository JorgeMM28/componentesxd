/**
 * Variante 16 — Calculadora Interactiva con Slider + Odómetro + Barras Comparativas — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/pricing-slider-odometer/PricingSliderOdometer.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const PricingSliderOdometer: React.FC<{ title?: string }> = ({
  title = 'Variante 16 — Calculadora Interactiva con Slider + Odómetro + Barras Comparativas'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-pricing-slider-odometer" data-active={active}>
      <h3>{title}</h3>
      <p>Ajusta el volumen de tráfico para animar simultáneamente las barras de los 3 planes y el costo estimado.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
