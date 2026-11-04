/**
 * ============================================================================
 * COMPONENTESXD — 01. Architectural Tree Sidebar Navigation (REACT / NEXT.JS)
 * Archivo: components/navigation/variants/collapsible-tree-sidebar/CollapsibleTreeSidebar.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface CollapsibleTreeSidebarProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const CollapsibleTreeSidebar: React.FC<CollapsibleTreeSidebarProps> = ({
  title = '01. Architectural Tree Sidebar Navigation',
  badge = 'APP SIDEBAR',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-navigation-collapsible-tree-sidebar"
      data-theme={interfaceTheme}
      data-variant="collapsible-tree-sidebar"
    >
      <header className="cxd-navigation-collapsible-tree-sidebar__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-navigation-collapsible-tree-sidebar__body">
        <p>Navegación vertical con secciones colapsables, contadores numéricos tabulares e indicador activo.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'collapsible-tree-sidebar', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
