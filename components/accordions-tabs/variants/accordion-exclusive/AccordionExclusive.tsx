/**
 * Variante 01 — Acordeón Exclusivo (Single-Open) con Animación de Altura — React / Next.js (TSX)
 * Archivo: components/accordions-tabs/variants/accordion-exclusive/AccordionExclusive.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const AccordionExclusive: React.FC<{ title?: string }> = ({
  title = 'Variante 01 — Acordeón Exclusivo (Single-Open) con Animación de Altura'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-accordions-tabs-accordion-exclusive" data-active={active}>
      <h3>{title}</h3>
      <p>Al expandir una sección técnica se cierran automáticamente las demás manteniendo el foco de lectura.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
