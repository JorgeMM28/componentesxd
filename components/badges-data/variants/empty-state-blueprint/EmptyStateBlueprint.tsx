/**
 * ============================================================================
 * COMPONENTESXD — 06. Technical Wireframe Empty State (REACT / NEXT.JS)
 * Archivo: components/badges-data/variants/empty-state-blueprint/EmptyStateBlueprint.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface EmptyStateBlueprintProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const EmptyStateBlueprint: React.FC<EmptyStateBlueprintProps> = ({
  title = '06. Technical Wireframe Empty State',
  badge = 'EMPTY STATE',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-badges-data-empty-state-blueprint"
      data-theme={interfaceTheme}
      data-variant="empty-state-blueprint"
    >
      <header className="cxd-badges-data-empty-state-blueprint__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-badges-data-empty-state-blueprint__body">
        <p>Estado vacío con ilustración geométrica en SVG, explicación clara y acción rápida de creación.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'empty-state-blueprint', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
