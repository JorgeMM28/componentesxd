/**
 * ============================================================================
 * COMPONENTESXD — 02. Hierarchical Tree & Sub-Row Table (REACT / NEXT.JS)
 * Archivo: components/tables/variants/nested-tree-grid/NestedTreeGrid.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface NestedTreeGridProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const NestedTreeGrid: React.FC<NestedTreeGridProps> = ({
  title = '02. Hierarchical Tree & Sub-Row Table',
  badge = 'TREE / EXPANDABLE',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-tables-nested-tree-grid"
      data-theme={interfaceTheme}
      data-variant="nested-tree-grid"
    >
      <header className="cxd-tables-nested-tree-grid__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-tables-nested-tree-grid__body">
        <p>Tabla jerárquica con filas padre/hijo desplegables para desglose de clusters, microservicios, carpetas o centros de costos.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'nested-tree-grid', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
