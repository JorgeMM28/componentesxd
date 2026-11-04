/**
 * Variante 04 — Carrusel Vertical Tipo Reel / Conmutador de Escenas en Eje Y — React / Next.js (TSX)
 * Archivo: components/carousels/variants/vertical-telemetry-reel/VerticalTelemetryReel.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const VerticalTelemetryReel: React.FC<{ title?: string }> = ({
  title = 'Variante 04 — Carrusel Vertical Tipo Reel / Conmutador de Escenas en Eje Y'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-carousels-vertical-telemetry-reel" data-active={active}>
      <h3>{title}</h3>
      <p>Transición vertical elástica entre paneles de telemetría con selector lateral numerado y controles arriba/abajo.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
