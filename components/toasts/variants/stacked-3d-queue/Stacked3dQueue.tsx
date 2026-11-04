/**
 * ============================================================================
 * COMPONENTESXD — 02. 3D Perspective Stacked Toast Queue (REACT / NEXT.JS)
 * Archivo: components/toasts/variants/stacked-3d-queue/Stacked3dQueue.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface Stacked3dQueueProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const Stacked3dQueue: React.FC<Stacked3dQueueProps> = ({
  title = '02. 3D Perspective Stacked Toast Queue',
  badge = 'STACKED QUEUE',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-toasts-stacked-3d-queue"
      data-theme={interfaceTheme}
      data-variant="stacked-3d-queue"
    >
      <header className="cxd-toasts-stacked-3d-queue__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-toasts-stacked-3d-queue__body">
        <p>Cola de notificaciones apiladas en profundidad 3D que se despliegan en abanico al pasar el cursor.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'stacked-3d-queue', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
