/**
 * ============================================================================
 * COMPONENTESXD — 05. Split Primary + Context Dropdown Button (REACT / NEXT.JS)
 * Archivo: components/buttons/variants/split-action-menu/SplitActionMenu.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface SplitActionMenuProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const SplitActionMenu: React.FC<SplitActionMenuProps> = ({
  title = '05. Split Primary + Context Dropdown Button',
  badge = 'SPLIT ACTION',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-buttons-split-action-menu"
      data-theme={interfaceTheme}
      data-variant="split-action-menu"
    >
      <header className="cxd-buttons-split-action-menu__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-buttons-split-action-menu__body">
        <p>Combina la ejecución principal inmediata con un selector desplegable de opciones secundarias (Deploy / Dry-run).</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'split-action-menu', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
