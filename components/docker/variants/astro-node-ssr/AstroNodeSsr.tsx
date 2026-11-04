/**
 * Variante 01 — Astro / Node 22 Alpine Multi-Stage SSR — React / Next.js (TSX)
 * Archivo: components/docker/variants/astro-node-ssr/AstroNodeSsr.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const AstroNodeSsr: React.FC<{ title?: string }> = ({
  title = 'Variante 01 — Astro / Node 22 Alpine Multi-Stage SSR'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-docker-astro-node-ssr" data-active={active}>
      <h3>{title}</h3>
      <p>Contenedor de producción de 3 etapas (deps → builder → runner sin root) para Astro, Next o Remix.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
