/**
 * ============================================================================
 * COMPONENTESXD — 03. Actionable Undo Toast + Progress Timer (REACT / NEXT.JS)
 * Archivo: components/toasts/variants/action-undo-countdown/ActionUndoCountdown.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface ActionUndoCountdownProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const ActionUndoCountdown: React.FC<ActionUndoCountdownProps> = ({
  title = '03. Actionable Undo Toast + Progress Timer',
  badge = 'UNDO / TIMER',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-toasts-action-undo-countdown"
      data-theme={interfaceTheme}
      data-variant="action-undo-countdown"
    >
      <header className="cxd-toasts-action-undo-countdown__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-toasts-action-undo-countdown__body">
        <p>Toaster con botón de acción ("Deshacer borrado") y barra inferior de cuenta regresiva sincronizada.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'action-undo-countdown', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
