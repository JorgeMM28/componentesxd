/**
 * ============================================================================
 * COMPONENTESXD — 04. Fullstack Compose (App + Postgres 17 + Redis 7.4) (REACT / NEXT.JS)
 * Archivo: components/docker/variants/fullstack-postgres-redis/FullstackPostgresRedis.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface FullstackPostgresRedisProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const FullstackPostgresRedis: React.FC<FullstackPostgresRedisProps> = ({
  title = '04. Fullstack Compose (App + Postgres 17 + Redis 7.4)',
  badge = 'DOCKER COMPOSE',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-docker-fullstack-postgres-redis"
      data-theme={interfaceTheme}
      data-variant="fullstack-postgres-redis"
    >
      <header className="cxd-docker-fullstack-postgres-redis__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-docker-fullstack-postgres-redis__body">
        <p>Orquestación completa con volúmenes persistentes, redes aisladas y healthchecks deterministas.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'fullstack-postgres-redis', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
