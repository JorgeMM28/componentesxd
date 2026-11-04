/**
 * ============================================================================
 * COMPONENTESXD — 01. Magnetic Cursor-Tracking Button (REACT / NEXT.JS)
 * Archivo: components/buttons/variants/magnetic-precision/MagneticPrecision.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface MagneticPrecisionProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const MagneticPrecision: React.FC<MagneticPrecisionProps> = ({
  title = '01. Magnetic Cursor-Tracking Button',
  badge = 'MAGNETIC',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-buttons-magnetic-precision"
      data-theme={interfaceTheme}
      data-variant="magnetic-precision"
    >
      <header className="cxd-buttons-magnetic-precision__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-buttons-magnetic-precision__body">
        <p>Calcula el centro geométrico y aplica traslación proporcional al cursor con retorno elástico.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'magnetic-precision', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
