/**
 * ============================================================================
 * COMPONENTESXD — 07. Segmented Action Bar with Active Pill (REACT / NEXT.JS)
 * Archivo: components/buttons/variants/segmented-mode-group/SegmentedModeGroup.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface SegmentedModeGroupProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const SegmentedModeGroup: React.FC<SegmentedModeGroupProps> = ({
  title = '07. Segmented Action Bar with Active Pill',
  badge = 'BUTTON GROUP',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-buttons-segmented-mode-group"
      data-theme={interfaceTheme}
      data-variant="segmented-mode-group"
    >
      <header className="cxd-buttons-segmented-mode-group__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-buttons-segmented-mode-group__body">
        <p>Barra de herramientas unificada por bordes de 1px para alternar vistas (Tabla / Tarjetas / Grafo / JSON).</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'segmented-mode-group', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
