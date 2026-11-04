/**
 * ============================================================================
 * COMPONENTESXD — 01. Cursor-Tracking Radial Spotlight Card (REACT / NEXT.JS)
 * Archivo: components/cards/variants/spotlight-radial-bento/SpotlightRadialBento.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface SpotlightRadialBentoProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const SpotlightRadialBento: React.FC<SpotlightRadialBentoProps> = ({
  title = '01. Cursor-Tracking Radial Spotlight Card',
  badge = 'RADIAL LIGHT',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-cards-spotlight-radial-bento"
      data-theme={interfaceTheme}
      data-variant="spotlight-radial-bento"
    >
      <header className="cxd-cards-spotlight-radial-bento__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-cards-spotlight-radial-bento__body">
        <p>Proyecta iluminación radial siguiendo las coordenadas X/Y del puntero sobre el chasis y el borde.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'spotlight-radial-bento', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
