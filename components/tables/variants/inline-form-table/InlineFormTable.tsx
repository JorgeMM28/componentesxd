/**
 * Variante 07 — Tabla con Formulario Integrado (Inputs, Selects y Cálculo) — React / Next.js (TSX)
 * Archivo: components/tables/variants/inline-form-table/InlineFormTable.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const InlineFormTable: React.FC<{ title?: string }> = ({
  title = 'Variante 07 — Tabla con Formulario Integrado (Inputs, Selects y Cálculo)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-tables-inline-form-table" data-active={active}>
      <h3>{title}</h3>
      <p>Celdas con inputs numéricos, selectores desplegables y switches que recalculan el subtotal de la tabla en vivo.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
