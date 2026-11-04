/**
 * ============================================================================
 * COMPONENTESXD — 06. Expandable Postmortem & Diagnostics Card (REACT / NEXT.JS)
 * Archivo: components/cards/variants/expandable-incident-card/ExpandableIncidentCard.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface ExpandableIncidentCardProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const ExpandableIncidentCard: React.FC<ExpandableIncidentCardProps> = ({
  title = '06. Expandable Postmortem & Diagnostics Card',
  badge = 'ACCORDION CARD',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-cards-expandable-incident-card"
      data-theme={interfaceTheme}
      data-variant="expandable-incident-card"
    >
      <header className="cxd-cards-expandable-incident-card__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-cards-expandable-incident-card__body">
        <p>Resumen compacto que despliega detalles técnicos de diagnóstico, nodos afectados y cronología.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'expandable-incident-card', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
