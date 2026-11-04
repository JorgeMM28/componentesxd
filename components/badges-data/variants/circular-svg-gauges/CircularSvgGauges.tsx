/**
 * ============================================================================
 * COMPONENTESXD — 03. Radial SVG Telemetry Gauges (REACT / NEXT.JS)
 * Archivo: components/badges-data/variants/circular-svg-gauges/CircularSvgGauges.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface CircularSvgGaugesProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const CircularSvgGauges: React.FC<CircularSvgGaugesProps> = ({
  title = '03. Radial SVG Telemetry Gauges',
  badge = 'SVG GAUGES',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-badges-data-circular-svg-gauges"
      data-theme={interfaceTheme}
      data-variant="circular-svg-gauges"
    >
      <header className="cxd-badges-data-circular-svg-gauges__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-badges-data-circular-svg-gauges__body">
        <p>Medidores circulares y semicirculares en SVG puro para CPU, Memoria, Disco y SLA.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'circular-svg-gauges', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
