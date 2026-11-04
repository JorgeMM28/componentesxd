/**
 * ============================================================================
 * COMPONENTESXD — 05. Technical Documentation Scrollspy Rail (REACT / NEXT.JS)
 * Archivo: components/navigation/variants/scrollspy-toc-rail/ScrollspyTocRail.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface ScrollspyTocRailProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const ScrollspyTocRail: React.FC<ScrollspyTocRailProps> = ({
  title = '05. Technical Documentation Scrollspy Rail',
  badge = 'TOC RAIL',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-navigation-scrollspy-toc-rail"
      data-theme={interfaceTheme}
      data-variant="scrollspy-toc-rail"
    >
      <header className="cxd-navigation-scrollspy-toc-rail__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-navigation-scrollspy-toc-rail__body">
        <p>Índice lateral para documentación técnica que resalta la sección visible actual y muestra porcentaje leído.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'scrollspy-toc-rail', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
