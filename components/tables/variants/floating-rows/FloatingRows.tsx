/**
 * Variante 04 — Tabla de Filas Flotantes Separadas — React / Next.js (TSX)
 * Archivo: components/tables/variants/floating-rows/FloatingRows.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const FloatingRows: React.FC<{ title?: string }> = ({
  title = 'Variante 04 — Tabla de Filas Flotantes Separadas'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-tables-floating-rows" data-active={active}>
      <h3>{title}</h3>
      <p>Cada fila es una tarjeta independiente con sombra propia, bordes redondeados y elevación al pasar el cursor.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
