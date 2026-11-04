/**
 * Variante 05 — Microservicio Ultra-Rápido con Bun Alpine — React / Next.js (TSX)
 * Archivo: components/docker/variants/bun-microservice/BunMicroservice.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const BunMicroservice: React.FC<{ title?: string }> = ({
  title = 'Variante 05 — Microservicio Ultra-Rápido con Bun Alpine'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-docker-bun-microservice" data-active={active}>
      <h3>{title}</h3>
      <p>Ejecución directa de TypeScript con arranque en milisegundos y consumo mínimo de RAM.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
