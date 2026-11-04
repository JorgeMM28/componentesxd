/**
 * ============================================================================
 * COMPONENTESXD — 05. Anchored Context Menu & Quick Popover (REACT / NEXT.JS)
 * Archivo: components/modals/variants/anchored-context-popover/AnchoredContextPopover.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface AnchoredContextPopoverProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const AnchoredContextPopover: React.FC<AnchoredContextPopoverProps> = ({
  title = '05. Anchored Context Menu & Quick Popover',
  badge = 'CONTEXT MENU',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-modals-anchored-context-popover"
      data-theme={interfaceTheme}
      data-variant="anchored-context-popover"
    >
      <header className="cxd-modals-anchored-context-popover__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-modals-anchored-context-popover__body">
        <p>Menú flotante compacto con separadores de 1px, iconos vectoriales alineados y sub-acciones.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'anchored-context-popover', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
