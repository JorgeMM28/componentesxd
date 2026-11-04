/**
 * ============================================================================
 * COMPONENTESXD — 03. Searchable Multi-Option Dropdown Select (REACT / NEXT.JS)
 * Archivo: components/forms/variants/custom-command-select/CustomCommandSelect.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface CustomCommandSelectProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const CustomCommandSelect: React.FC<CustomCommandSelectProps> = ({
  title = '03. Searchable Multi-Option Dropdown Select',
  badge = 'CUSTOM SELECT',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-forms-custom-command-select"
      data-theme={interfaceTheme}
      data-variant="custom-command-select"
    >
      <header className="cxd-forms-custom-command-select__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-forms-custom-command-select__body">
        <p>Lista desplegable organizada con categorías, prefijos técnicos y selección instantánea sin desorden visual.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'custom-command-select', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
