/**
 * Variante 04 — Tarjeta Interactiva con Pestañas Internas — React / Next.js (TSX)
 * Archivo: components/cards/variants/interactive-tabbed-card/InteractiveTabbedCard.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const InteractiveTabbedCard: React.FC<{ title?: string }> = ({
  title = 'Variante 04 — Tarjeta Interactiva con Pestañas Internas'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-cards-interactive-tabbed-card" data-active={active}>
      <h3>{title}</h3>
      <p>Alterna entre Resumen, Métricas y Configuración dentro de la misma tarjeta sin recargar.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
