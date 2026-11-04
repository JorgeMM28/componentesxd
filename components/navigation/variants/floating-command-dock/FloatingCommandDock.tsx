/**
 * ============================================================================
 * COMPONENTESXD — 03. Floating Bottom Command Dock (REACT / NEXT.JS)
 * Archivo: components/navigation/variants/floating-command-dock/FloatingCommandDock.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface FloatingCommandDockProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const FloatingCommandDock: React.FC<FloatingCommandDockProps> = ({
  title = '03. Floating Bottom Command Dock',
  badge = 'FLOATING DOCK',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-navigation-floating-command-dock"
      data-theme={interfaceTheme}
      data-variant="floating-command-dock"
    >
      <header className="cxd-navigation-floating-command-dock__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-navigation-floating-command-dock__body">
        <p>Barra flotante inferior con tooltips instantáneos, separadores verticales y accesos rápidos.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'floating-command-dock', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
