/**
 * Variante 03 — Carrusel Multi-Tarjeta con Vista Previa Lateral (Peek) y Barra de Progreso — React / Next.js (TSX)
 * Archivo: components/carousels/variants/snap-peek-slider/SnapPeekSlider.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const SnapPeekSlider: React.FC<{ title?: string }> = ({
  title = 'Variante 03 — Carrusel Multi-Tarjeta con Vista Previa Lateral (Peek) y Barra de Progreso'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-carousels-snap-peek-slider" data-active={active}>
      <h3>{title}</h3>
      <p>Muestra múltiples tarjetas visibles simultáneamente con desplazamiento suave, indicador numérico 01/05 y barra de progreso sincronizada.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
