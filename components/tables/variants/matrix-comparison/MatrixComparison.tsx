/**
 * ============================================================================
 * COMPONENTESXD — 04. Sticky Spec & Feature Comparison Matrix (REACT / NEXT.JS)
 * Archivo: components/tables/variants/matrix-comparison/MatrixComparison.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface MatrixComparisonProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const MatrixComparison: React.FC<MatrixComparisonProps> = ({
  title = '04. Sticky Spec & Feature Comparison Matrix',
  badge = 'SPEC MATRIX',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-tables-matrix-comparison"
      data-theme={interfaceTheme}
      data-variant="matrix-comparison"
    >
      <header className="cxd-tables-matrix-comparison__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-tables-matrix-comparison__body">
        <p>Tabla comparativa con primera columna fija, indicadores vectoriales SVG de soporte, límites técnicos y cabeceras congeladas.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'matrix-comparison', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
