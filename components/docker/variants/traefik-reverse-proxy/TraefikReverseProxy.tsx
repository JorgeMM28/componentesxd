/**
 * ============================================================================
 * COMPONENTESXD — 06. Traefik v3 Automatic TLS + Reverse Proxy (REACT / NEXT.JS)
 * Archivo: components/docker/variants/traefik-reverse-proxy/TraefikReverseProxy.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface TraefikReverseProxyProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const TraefikReverseProxy: React.FC<TraefikReverseProxyProps> = ({
  title = '06. Traefik v3 Automatic TLS + Reverse Proxy',
  badge = 'REVERSE PROXY',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-docker-traefik-reverse-proxy"
      data-theme={interfaceTheme}
      data-variant="traefik-reverse-proxy"
    >
      <header className="cxd-docker-traefik-reverse-proxy__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-docker-traefik-reverse-proxy__body">
        <p>Configuración lista para enrutar múltiples contenedores locales con certificados y balanceo automático.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'traefik-reverse-proxy', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
