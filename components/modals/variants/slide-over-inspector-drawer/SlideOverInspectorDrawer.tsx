/**
 * ============================================================================
 * COMPONENTESXD — 02. Slide-Over Telemetry Inspector Drawer (REACT / NEXT.JS)
 * Archivo: components/modals/variants/slide-over-inspector-drawer/SlideOverInspectorDrawer.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface SlideOverInspectorDrawerProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const SlideOverInspectorDrawer: React.FC<SlideOverInspectorDrawerProps> = ({
  title = '02. Slide-Over Telemetry Inspector Drawer',
  badge = 'SIDE DRAWER',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-modals-slide-over-inspector-drawer"
      data-theme={interfaceTheme}
      data-variant="slide-over-inspector-drawer"
    >
      <header className="cxd-modals-slide-over-inspector-drawer__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-modals-slide-over-inspector-drawer__body">
        <p>Panel lateral deslizable para inspeccionar metadatos de una fila, logs o configuración sin perder contexto.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'slide-over-inspector-drawer', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
