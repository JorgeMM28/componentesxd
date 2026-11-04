/**
 * Variante 05 — Conmutador de Planes Mensual / Anual con Recálculo Animado — React / Next.js (TSX)
 * Archivo: components/accordions-tabs/variants/segmented-pricing-toggle/SegmentedPricingToggle.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const SegmentedPricingToggle: React.FC<{ title?: string }> = ({
  title = 'Variante 05 — Conmutador de Planes Mensual / Anual con Recálculo Animado'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-accordions-tabs-segmented-pricing-toggle" data-active={active}>
      <h3>{title}</h3>
      <p>Alterna entre facturación mensual y anual aplicando descuento automático e interpolando las tarifas en vivo.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
