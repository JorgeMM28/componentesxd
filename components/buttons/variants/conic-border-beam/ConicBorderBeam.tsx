/**
 * ============================================================================
 * COMPONENTESXD — 02. Conic Border Beam Button (REACT / NEXT.JS)
 * Archivo: components/buttons/variants/conic-border-beam/ConicBorderBeam.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface ConicBorderBeamProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const ConicBorderBeam: React.FC<ConicBorderBeamProps> = ({
  title = '02. Conic Border Beam Button',
  badge = 'CSS @PROPERTY',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-buttons-conic-border-beam"
      data-theme={interfaceTheme}
      data-variant="conic-border-beam"
    >
      <header className="cxd-buttons-conic-border-beam__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-buttons-conic-border-beam__body">
        <p>Haz de luz perimetral continuo renderizado por GPU mediante @property sin elementos DOM extra.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'conic-border-beam', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
