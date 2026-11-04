/**
 * Variante 04 — Línea de Tiempo (Timeline) con Filtro de Eventos — React / Next.js (TSX)
 * Archivo: components/badges-data/variants/vertical-event-timeline/VerticalEventTimeline.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const VerticalEventTimeline: React.FC<{ title?: string }> = ({
  title = 'Variante 04 — Línea de Tiempo (Timeline) con Filtro de Eventos'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-badges-data-vertical-event-timeline" data-active={active}>
      <h3>{title}</h3>
      <p>Cronología vertical con nodos conectados, estados de despliegue y botón para agregar nuevo evento.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
