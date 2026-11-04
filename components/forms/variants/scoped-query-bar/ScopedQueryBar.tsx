/**
 * ============================================================================
 * COMPONENTESXD — 05. Scoped Filter & Query Input Bar (REACT / NEXT.JS)
 * Archivo: components/forms/variants/scoped-query-bar/ScopedQueryBar.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface ScopedQueryBarProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const ScopedQueryBar: React.FC<ScopedQueryBarProps> = ({
  title = '05. Scoped Filter & Query Input Bar',
  badge = 'QUERY BUILDER',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-forms-scoped-query-bar"
      data-theme={interfaceTheme}
      data-variant="scoped-query-bar"
    >
      <header className="cxd-forms-scoped-query-bar__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-forms-scoped-query-bar__body">
        <p>Barra de entrada con selector de ámbito (env:prod, region:us-east) integrado a la izquierda y botón limpiar.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'scoped-query-bar', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
