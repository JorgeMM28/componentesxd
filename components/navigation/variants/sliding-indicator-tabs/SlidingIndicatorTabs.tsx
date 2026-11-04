/**
 * ============================================================================
 * COMPONENTESXD — 04. Precision Tab Bar with Sliding Hairline (REACT / NEXT.JS)
 * Archivo: components/navigation/variants/sliding-indicator-tabs/SlidingIndicatorTabs.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface SlidingIndicatorTabsProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const SlidingIndicatorTabs: React.FC<SlidingIndicatorTabsProps> = ({
  title = '04. Precision Tab Bar with Sliding Hairline',
  badge = 'TABS BAR',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-navigation-sliding-indicator-tabs"
      data-theme={interfaceTheme}
      data-variant="sliding-indicator-tabs"
    >
      <header className="cxd-navigation-sliding-indicator-tabs__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-navigation-sliding-indicator-tabs__body">
        <p>Pestañas horizontales con línea inferior activa que se desliza suavemente hacia la pestaña seleccionada.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'sliding-indicator-tabs', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
