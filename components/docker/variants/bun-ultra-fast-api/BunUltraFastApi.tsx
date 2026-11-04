/**
 * ============================================================================
 * COMPONENTESXD — 05. Bun Distroless High-Performance Runtime (REACT / NEXT.JS)
 * Archivo: components/docker/variants/bun-ultra-fast-api/BunUltraFastApi.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface BunUltraFastApiProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const BunUltraFastApi: React.FC<BunUltraFastApiProps> = ({
  title = '05. Bun Distroless High-Performance Runtime',
  badge = 'BUN RUNTIME',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-docker-bun-ultra-fast-api"
      data-theme={interfaceTheme}
      data-variant="bun-ultra-fast-api"
    >
      <header className="cxd-docker-bun-ultra-fast-api__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-docker-bun-ultra-fast-api__body">
        <p>Contenedor basado en oven/bun:alpine para microservicios TypeScript de arranque instantáneo.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'bun-ultra-fast-api', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
