/**
 * ============================================================================
 * COMPONENTESXD — 06. Architectural Callout & Warning Block (REACT / NEXT.JS)
 * Archivo: components/toasts/variants/inline-diff-callout/InlineDiffCallout.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface InlineDiffCalloutProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const InlineDiffCallout: React.FC<InlineDiffCalloutProps> = ({
  title = '06. Architectural Callout & Warning Block',
  badge = 'CALLOUT BOX',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-toasts-inline-diff-callout"
      data-theme={interfaceTheme}
      data-variant="inline-diff-callout"
    >
      <header className="cxd-toasts-inline-diff-callout__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-toasts-inline-diff-callout__body">
        <p>Bloque de alerta embebido con borde lateral de precisión, icono SVG técnico y acciones correctivas.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'inline-diff-callout', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
