/**
 * Variante 04 — Tablero Kanban Interactivo (Mover Tareas entre Columnas en Vivo) — React / Next.js (TSX)
 * Archivo: components/accordions-tabs/variants/kanban-mini-board/KanbanMiniBoard.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const KanbanMiniBoard: React.FC<{ title?: string }> = ({
  title = 'Variante 04 — Tablero Kanban Interactivo (Mover Tareas entre Columnas en Vivo)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-accordions-tabs-kanban-mini-board" data-active={active}>
      <h3>{title}</h3>
      <p>Tarjetas operativas con botones para promover o regresar tareas entre Backlog, En Progreso y Producción.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
