/**
 * Variante 05 — Tabla Interactiva (Ordenamiento + Selección en Vivo) — React / Next.js (TSX)
 * Archivo: components/tables/variants/interactive-sort-select/InteractiveSortSelect.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const InteractiveSortSelect: React.FC<{ title?: string }> = ({
  title = 'Variante 05 — Tabla Interactiva (Ordenamiento + Selección en Vivo)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-tables-interactive-sort-select" data-active={active}>
      <h3>{title}</h3>
      <p>Haz clic en las cabeceras para ordenar filas dinámicamente y marca casillas para activar la barra de lote.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
