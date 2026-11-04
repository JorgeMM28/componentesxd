/**
 * ============================================================================
 * COMPONENTESXD — 02. Vertical Deployment & Event Timeline (REACT / NEXT.JS)
 * Archivo: components/badges-data/variants/activity-timeline-feed/ActivityTimelineFeed.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface ActivityTimelineFeedProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const ActivityTimelineFeed: React.FC<ActivityTimelineFeedProps> = ({
  title = '02. Vertical Deployment & Event Timeline',
  badge = 'TIMELINE FEED',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-badges-data-activity-timeline-feed"
      data-theme={interfaceTheme}
      data-variant="activity-timeline-feed"
    >
      <header className="cxd-badges-data-activity-timeline-feed__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-badges-data-activity-timeline-feed__body">
        <p>Línea de tiempo técnica con nodos vectoriales conectados, autor, timestamp relativo y metadatos.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'activity-timeline-feed', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
