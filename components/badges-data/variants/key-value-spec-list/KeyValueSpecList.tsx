/**
 * ============================================================================
 * COMPONENTESXD — 04. Architectural Key-Value Description Grid (REACT / NEXT.JS)
 * Archivo: components/badges-data/variants/key-value-spec-list/KeyValueSpecList.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface KeyValueSpecListProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const KeyValueSpecList: React.FC<KeyValueSpecListProps> = ({
  title = '04. Architectural Key-Value Description Grid',
  badge = 'SPEC LIST',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-badges-data-key-value-spec-list"
      data-theme={interfaceTheme}
      data-variant="key-value-spec-list"
    >
      <header className="cxd-badges-data-key-value-spec-list__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-badges-data-key-value-spec-list__body">
        <p>Lista estructurada de propiedades técnicas con líneas guía punteadas y copiado rápido por valor.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'key-value-spec-list', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
