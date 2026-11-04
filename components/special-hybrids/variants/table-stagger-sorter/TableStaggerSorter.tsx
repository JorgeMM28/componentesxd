/**
 * Variante 03 — Tabla con Reordenamiento Coreografiado (stagger) y Barras Cinéticas — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/table-stagger-sorter/TableStaggerSorter.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const TableStaggerSorter: React.FC<{ title?: string }> = ({
  title = 'Variante 03 — Tabla con Reordenamiento Coreografiado (stagger) y Barras Cinéticas'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-table-stagger-sorter" data-active={active}>
      <h3>{title}</h3>
      <p>Ordena por latencia, carga o nombre y observa cómo todas las filas y sus barras internas se reacomodan con una onda escalonada.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
