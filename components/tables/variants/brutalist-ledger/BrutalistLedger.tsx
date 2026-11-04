/**
 * Variante 10 — Tabla Industrial Cebra con Pie de Sumatoria — React / Next.js (TSX)
 * Archivo: components/tables/variants/brutalist-ledger/BrutalistLedger.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const BrutalistLedger: React.FC<{ title?: string }> = ({
  title = 'Variante 10 — Tabla Industrial Cebra con Pie de Sumatoria'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-tables-brutalist-ledger" data-active={active}>
      <h3>{title}</h3>
      <p>Alto contraste con filas alternadas (zebra), bordes marcados de 2px y fila tfoot de balance total.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
