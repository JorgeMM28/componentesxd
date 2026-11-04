/**
 * ============================================================================
 * COMPONENTESXD — 08. Mechanical Hard-Offset Push Button (REACT / NEXT.JS)
 * Archivo: components/buttons/variants/industrial-offset-trigger/IndustrialOffsetTrigger.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface IndustrialOffsetTriggerProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const IndustrialOffsetTrigger: React.FC<IndustrialOffsetTriggerProps> = ({
  title = '08. Mechanical Hard-Offset Push Button',
  badge = 'TACTILE PUSH',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-buttons-industrial-offset-trigger"
      data-theme={interfaceTheme}
      data-variant="industrial-offset-trigger"
    >
      <header className="cxd-buttons-industrial-offset-trigger__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-buttons-industrial-offset-trigger__body">
        <p>Recorrido físico vertical al presionar con sombra sólida que colapsa en el estado :active.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'industrial-offset-trigger', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
