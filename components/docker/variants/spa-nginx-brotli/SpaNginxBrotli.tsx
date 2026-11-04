/**
 * ============================================================================
 * COMPONENTESXD — 03. React / Vue / Svelte / Angular SPA + Nginx (REACT / NEXT.JS)
 * Archivo: components/docker/variants/spa-nginx-brotli/SpaNginxBrotli.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface SpaNginxBrotliProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const SpaNginxBrotli: React.FC<SpaNginxBrotliProps> = ({
  title = '03. React / Vue / Svelte / Angular SPA + Nginx',
  badge = 'NGINX ALPINE',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-docker-spa-nginx-brotli"
      data-theme={interfaceTheme}
      data-variant="spa-nginx-brotli"
    >
      <header className="cxd-docker-spa-nginx-brotli__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-docker-spa-nginx-brotli__body">
        <p>Compila estáticos en etapa builder y sirve con Nginx configurado con fallback SPA y cabeceras de caché.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'spa-nginx-brotli', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
