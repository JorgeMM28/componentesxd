/**
 * Variante 06 — Tarjeta con Formulario Rápido de Cotización / Config — React / Next.js (TSX)
 * Archivo: components/cards/variants/form-embedded-card/FormEmbeddedCard.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const FormEmbeddedCard: React.FC<{ title?: string }> = ({
  title = 'Variante 06 — Tarjeta con Formulario Rápido de Cotización / Config'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-cards-form-embedded-card" data-active={active}>
      <h3>{title}</h3>
      <p>Permite ajustar parámetros con inputs y calcular el costo mensual directamente en la tarjeta.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
