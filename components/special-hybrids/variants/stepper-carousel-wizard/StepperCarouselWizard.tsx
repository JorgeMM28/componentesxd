/**
 * Variante 01 — Step-by-Step Wizard + Carrusel 3D Sincronizado + Timeline — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/stepper-carousel-wizard/StepperCarouselWizard.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const StepperCarouselWizard: React.FC<{ title?: string }> = ({
  title = 'Variante 01 — Step-by-Step Wizard + Carrusel 3D Sincronizado + Timeline'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-stepper-carousel-wizard" data-active={active}>
      <h3>{title}</h3>
      <p>Asistente paso a paso donde avanzar o retroceder sincroniza la barra de progreso superior, desliza el carrusel 3D y anima los sub-elementos con stagger.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
