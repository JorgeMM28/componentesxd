/**
 * ============================================================================
 * COMPONENTESXD — 06. Raw JSON / Schema Diff Modal Inspector (REACT / NEXT.JS)
 * Archivo: components/modals/variants/json-payload-lightbox/JsonPayloadLightbox.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface JsonPayloadLightboxProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const JsonPayloadLightbox: React.FC<JsonPayloadLightboxProps> = ({
  title = '06. Raw JSON / Schema Diff Modal Inspector',
  badge = 'PAYLOAD VIEWER',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-modals-json-payload-lightbox"
      data-theme={interfaceTheme}
      data-variant="json-payload-lightbox"
    >
      <header className="cxd-modals-json-payload-lightbox__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-modals-json-payload-lightbox__body">
        <p>Visor modal con numeración de líneas, plegado de nodos y copiado directo de estructuras JSON.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'json-payload-lightbox', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
