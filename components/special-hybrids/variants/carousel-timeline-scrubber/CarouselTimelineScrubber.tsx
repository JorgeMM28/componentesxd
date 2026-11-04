/**
 * Variante 13 — Carrusel Cinético Controlado por Slider Scrubber (timeline.seek) — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/carousel-timeline-scrubber/CarouselTimelineScrubber.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const CarouselTimelineScrubber: React.FC<{ title?: string }> = ({
  title = 'Variante 13 — Carrusel Cinético Controlado por Slider Scrubber (timeline.seek)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-carousel-timeline-scrubber" data-active={active}>
      <h3>{title}</h3>
      <p>Arrastra la barra de tiempo para controlar manualmente la posición, rotación y escala de todo el carrusel.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
