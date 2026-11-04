/**
 * Variante 09 — Tablero Kanban con Física Spring + Barra de Progreso Global Animada — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/kanban-spring-pipeline/KanbanSpringPipeline.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const KanbanSpringPipeline: React.FC<{ title?: string }> = ({
  title = 'Variante 09 — Tablero Kanban con Física Spring + Barra de Progreso Global Animada'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-kanban-spring-pipeline" data-active={active}>
      <h3>{title}</h3>
      <p>Promueve tarjetas entre etapas disparando rebote físico y actualizando el porcentaje global del sprint.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
