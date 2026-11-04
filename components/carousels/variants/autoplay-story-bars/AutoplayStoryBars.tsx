/**
 * Variante 07 — Carrusel con Barras de Tiempo Segmentadas (Autoplay + Pausa) — React / Next.js (TSX)
 * Archivo: components/carousels/variants/autoplay-story-bars/AutoplayStoryBars.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const AutoplayStoryBars: React.FC<{ title?: string }> = ({
  title = 'Variante 07 — Carrusel con Barras de Tiempo Segmentadas (Autoplay + Pausa)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-carousels-autoplay-story-bars" data-active={active}>
      <h3>{title}</h3>
      <p>Cabecera con segmentos de progreso temporales que avanzan automáticamente y permiten saltar a cualquier historia.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
