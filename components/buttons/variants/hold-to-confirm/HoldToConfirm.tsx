/**
 * ============================================================================
 * COMPONENTESXD — 03. Destructive Hold-to-Confirm Button (REACT / NEXT.JS)
 * Archivo: components/buttons/variants/hold-to-confirm/HoldToConfirm.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface HoldToConfirmProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const HoldToConfirm: React.FC<HoldToConfirmProps> = ({
  title = '03. Destructive Hold-to-Confirm Button',
  badge = 'SAFETY LOCK',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-buttons-hold-to-confirm"
      data-theme={interfaceTheme}
      data-variant="hold-to-confirm"
    >
      <header className="cxd-buttons-hold-to-confirm__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-buttons-hold-to-confirm__body">
        <p>Previene clics accidentales en acciones críticas exigiendo mantener presionado 1.2s mientras se llena la barra.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'hold-to-confirm', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
