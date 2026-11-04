/**
 * ============================================================================
 * COMPONENTESXD — 01. Dynamic Island Morphing Capsule (REACT / NEXT.JS)
 * Archivo: components/toasts/variants/dynamic-island-capsule/DynamicIslandCapsule.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface DynamicIslandCapsuleProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const DynamicIslandCapsule: React.FC<DynamicIslandCapsuleProps> = ({
  title = '01. Dynamic Island Morphing Capsule',
  badge = 'MORPHING CAPSULE',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-toasts-dynamic-island-capsule"
      data-theme={interfaceTheme}
      data-variant="dynamic-island-capsule"
    >
      <header className="cxd-toasts-dynamic-island-capsule__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-toasts-dynamic-island-capsule__body">
        <p>Cápsula superior que se expande suavemente entre estado reposo, procesamiento con onda de actividad y confirmación.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'dynamic-island-capsule', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
