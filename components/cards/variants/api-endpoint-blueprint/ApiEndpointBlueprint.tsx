/**
 * ============================================================================
 * COMPONENTESXD — 03. REST / GraphQL Endpoint Spec Card (REACT / NEXT.JS)
 * Archivo: components/cards/variants/api-endpoint-blueprint/ApiEndpointBlueprint.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface ApiEndpointBlueprintProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const ApiEndpointBlueprint: React.FC<ApiEndpointBlueprintProps> = ({
  title = '03. REST / GraphQL Endpoint Spec Card',
  badge = 'API SPEC',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-cards-api-endpoint-blueprint"
      data-theme={interfaceTheme}
      data-variant="api-endpoint-blueprint"
    >
      <header className="cxd-cards-api-endpoint-blueprint__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-cards-api-endpoint-blueprint__body">
        <p>Muestra método HTTP, ruta parametrizada, latencia media y esquema de respuesta con botón de prueba.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'api-endpoint-blueprint', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
