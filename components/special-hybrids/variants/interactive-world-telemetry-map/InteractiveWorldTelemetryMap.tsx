/**
 * Variante 22 — Mapa Mundial Interactivo con Rutas de Tráfico en Vivo (svg.createMotionPath) — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/interactive-world-telemetry-map/InteractiveWorldTelemetryMap.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const InteractiveWorldTelemetryMap: React.FC<{ title?: string }> = ({
  title = 'Variante 22 — Mapa Mundial Interactivo con Rutas de Tráfico en Vivo (svg.createMotionPath)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-interactive-world-telemetry-map" data-active={active}>
      <h3>{title}</h3>
      <p>Haz clic en cualquier centro de datos (Tokyo, Frankfurt, New York, São Paulo, Sydney, SF) para redirigir los paquetes luminosos globales y disparar ondas de choque.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
