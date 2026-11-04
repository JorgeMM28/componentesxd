/**
 * ============================================================================
 * COMPONENTESXD — 02. Multi-Tenant Breadcrumb + Context Switcher (REACT / NEXT.JS)
 * Archivo: components/navigation/variants/dropdown-breadcrumb-bar/DropdownBreadcrumbBar.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface DropdownBreadcrumbBarProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const DropdownBreadcrumbBar: React.FC<DropdownBreadcrumbBarProps> = ({
  title = '02. Multi-Tenant Breadcrumb + Context Switcher',
  badge = 'BREADCRUMBS',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-navigation-dropdown-breadcrumb-bar"
      data-theme={interfaceTheme}
      data-variant="dropdown-breadcrumb-bar"
    >
      <header className="cxd-navigation-dropdown-breadcrumb-bar__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-navigation-dropdown-breadcrumb-bar__body">
        <p>Ruta de navegación estilo Vercel/GitHub con listas desplegables para cambiar organización, proyecto o rama.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'dropdown-breadcrumb-bar', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
