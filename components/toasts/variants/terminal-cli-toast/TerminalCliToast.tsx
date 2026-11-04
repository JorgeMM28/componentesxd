/**
 * ============================================================================
 * COMPONENTESXD — 04. CLI & Webhook Telemetry Toast (REACT / NEXT.JS)
 * Archivo: components/toasts/variants/terminal-cli-toast/TerminalCliToast.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface TerminalCliToastProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const TerminalCliToast: React.FC<TerminalCliToastProps> = ({
  title = '04. CLI & Webhook Telemetry Toast',
  badge = 'DEV / WEBHOOK',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-toasts-terminal-cli-toast"
      data-theme={interfaceTheme}
      data-variant="terminal-cli-toast"
    >
      <header className="cxd-toasts-terminal-cli-toast__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-toasts-terminal-cli-toast__body">
        <p>Notificación técnica con payload JSON resumido, código de estado HTTP y botón de copiado de trace ID.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'terminal-cli-toast', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
