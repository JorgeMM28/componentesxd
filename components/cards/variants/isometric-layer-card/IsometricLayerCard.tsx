/**
 * ============================================================================
 * COMPONENTESXD — 07. 3D Isometric Perspective Hover Card (REACT / NEXT.JS)
 * Archivo: components/cards/variants/isometric-layer-card/IsometricLayerCard.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface IsometricLayerCardProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const IsometricLayerCard: React.FC<IsometricLayerCardProps> = ({
  title = '07. 3D Isometric Perspective Hover Card',
  badge = '3D TILT',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-cards-isometric-layer-card"
      data-theme={interfaceTheme}
      data-variant="isometric-layer-card"
    >
      <header className="cxd-cards-isometric-layer-card__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-cards-isometric-layer-card__body">
        <p>Calcula ángulos de rotación X/Y según posición del cursor con capas internas en paralaje.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'isometric-layer-card', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
