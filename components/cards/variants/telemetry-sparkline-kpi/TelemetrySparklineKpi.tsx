/**
 * ============================================================================
 * COMPONENTESXD — 02. Telemetry KPI + SVG Sparkline Card (REACT / NEXT.JS)
 * Archivo: components/cards/variants/telemetry-sparkline-kpi/TelemetrySparklineKpi.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface TelemetrySparklineKpiProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const TelemetrySparklineKpi: React.FC<TelemetrySparklineKpiProps> = ({
  title = '02. Telemetry KPI + SVG Sparkline Card',
  badge = 'LIVE METRIC',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-cards-telemetry-sparkline-kpi"
      data-theme={interfaceTheme}
      data-variant="telemetry-sparkline-kpi"
    >
      <header className="cxd-cards-telemetry-sparkline-kpi__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-cards-telemetry-sparkline-kpi__body">
        <p>Tarjeta de métrica operativa con curva SVG embebida, variación porcentual y estado de umbral.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'telemetry-sparkline-kpi', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
