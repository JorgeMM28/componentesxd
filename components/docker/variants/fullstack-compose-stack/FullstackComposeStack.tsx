/**
 * Variante 04 — Docker Compose Fullstack (App + Postgres 17 + Redis 7.4) — React / Next.js (TSX)
 * Archivo: components/docker/variants/fullstack-compose-stack/FullstackComposeStack.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const FullstackComposeStack: React.FC<{ title?: string }> = ({
  title = 'Variante 04 — Docker Compose Fullstack (App + Postgres 17 + Redis 7.4)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-docker-fullstack-compose-stack" data-active={active}>
      <h3>{title}</h3>
      <p>Orquestación completa con volúmenes persistentes y healthchecks automáticos.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
