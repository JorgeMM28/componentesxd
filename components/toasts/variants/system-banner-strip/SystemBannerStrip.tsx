/**
 * ============================================================================
 * COMPONENTESXD — 05. Full-Width Incident & Maintenance Strip (REACT / NEXT.JS)
 * Archivo: components/toasts/variants/system-banner-strip/SystemBannerStrip.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface SystemBannerStripProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const SystemBannerStrip: React.FC<SystemBannerStripProps> = ({
  title = '05. Full-Width Incident & Maintenance Strip',
  badge = 'STATUS BAR',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-toasts-system-banner-strip"
      data-theme={interfaceTheme}
      data-variant="system-banner-strip"
    >
      <header className="cxd-toasts-system-banner-strip__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-toasts-system-banner-strip__body">
        <p>Barra estructural superior para anuncios de mantenimiento, degradación de SLA o nuevas versiones.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'system-banner-strip', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
