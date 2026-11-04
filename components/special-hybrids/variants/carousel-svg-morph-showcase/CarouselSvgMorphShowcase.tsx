/**
 * Variante 04 — Carrusel de Escenas + Transformación Geométrica SVG (svg.morphTo) — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/carousel-svg-morph-showcase/CarouselSvgMorphShowcase.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const CarouselSvgMorphShowcase: React.FC<{ title?: string }> = ({
  title = 'Variante 04 — Carrusel de Escenas + Transformación Geométrica SVG (svg.morphTo)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-carousel-svg-morph-showcase" data-active={active}>
      <h3>{title}</h3>
      <p>Cada diapositiva del carrusel transforma los vértices del polígono vectorial central e interpola las métricas del sistema.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
