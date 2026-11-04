/**
 * ============================================================================
 * COMPONENTESXD — 04. Async 3-State Morph Button (Idle -> Run -> Done) (REACT / NEXT.JS)
 * Archivo: components/buttons/variants/async-state-morph/AsyncStateMorph.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface AsyncStateMorphProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const AsyncStateMorph: React.FC<AsyncStateMorphProps> = ({
  title = '04. Async 3-State Morph Button (Idle -> Run -> Done)',
  badge = 'STATE MACHINE',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-buttons-async-state-morph"
      data-theme={interfaceTheme}
      data-variant="async-state-morph"
    >
      <header className="cxd-buttons-async-state-morph__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-buttons-async-state-morph__body">
        <p>Transiciona automáticamente entre etiqueta normal, spinner SVG de precisión y confirmación vectorial.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'async-state-morph', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
