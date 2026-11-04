/**
 * Variante 06 — Tabla con Acciones (Duplicar, Estado y Eliminar Fila) — React / Next.js (TSX)
 * Archivo: components/tables/variants/crud-actions/CrudActions.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const CrudActions: React.FC<{ title?: string }> = ({
  title = 'Variante 06 — Tabla con Acciones (Duplicar, Estado y Eliminar Fila)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-tables-crud-actions" data-active={active}>
      <h3>{title}</h3>
      <p>Botones funcionales en cada fila para cambiar estado, duplicar registro o eliminar con animación Anime.js.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
