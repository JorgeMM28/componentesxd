/**
 * Variante 02 — Carrusel Marquesina Infinita Continua (Control de Velocidad y Dirección) — React / Next.js (TSX)
 * Archivo: components/carousels/variants/infinite-marquee/InfiniteMarquee.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const InfiniteMarquee: React.FC<{ title?: string }> = ({
  title = 'Variante 02 — Carrusel Marquesina Infinita Continua (Control de Velocidad y Dirección)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-carousels-infinite-marquee" data-active={active}>
      <h3>{title}</h3>
      <p>Cinta continua sin costuras para nodos, métricas o marcas con botones para invertir dirección, pausar o acelerar en vivo.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
