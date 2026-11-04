/**
 * Variante 05 — Carrusel Mazo 3D con Física de Resorte (createSpring) + Odómetro — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/carousel-spring-physics-deck/CarouselSpringPhysicsDeck.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const CarouselSpringPhysicsDeck: React.FC<{ title?: string }> = ({
  title = 'Variante 05 — Carrusel Mazo 3D con Física de Resorte (createSpring) + Odómetro'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-carousel-spring-physics-deck" data-active={active}>
      <h3>{title}</h3>
      <p>Rota las tarjetas en el eje Z con física real de resorte mientras el contador financiero interpola el valor del nodo activo.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
