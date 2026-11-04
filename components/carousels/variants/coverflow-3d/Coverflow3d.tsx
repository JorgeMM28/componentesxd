/**
 * Variante 01 — Carrusel 3D Coverflow con Perspectiva e Inclinación — React / Next.js (TSX)
 * Archivo: components/carousels/variants/coverflow-3d/Coverflow3d.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const Coverflow3d: React.FC<{ title?: string }> = ({
  title = 'Variante 01 — Carrusel 3D Coverflow con Perspectiva e Inclinación'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-carousels-coverflow-3d" data-active={active}>
      <h3>{title}</h3>
      <p>Tarjetas en perspectiva tridimensional donde la diapositiva central avanza al frente y las laterales rotan en eje Y con Anime.js v4.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
