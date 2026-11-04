/**
 * Variante 08 — Tabla con Filtros Avanzados (Buscador + Categoría + Estado) — React / Next.js (TSX)
 * Archivo: components/tables/variants/multi-filter-table/MultiFilterTable.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const MultiFilterTable: React.FC<{ title?: string }> = ({
  title = 'Variante 08 — Tabla con Filtros Avanzados (Buscador + Categoría + Estado)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-tables-multi-filter-table" data-active={active}>
      <h3>{title}</h3>
      <p>Barra superior con buscador instantáneo, selector de departamento y botones de estado combinables.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
