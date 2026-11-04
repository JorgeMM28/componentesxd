/**
 * Variante 05 — Lista Clave-Valor con Copiado al Portapapeles por Fila — React / Next.js (TSX)
 * Archivo: components/badges-data/variants/copyable-spec-grid/CopyableSpecGrid.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const CopyableSpecGrid: React.FC<{ title?: string }> = ({
  title = 'Variante 05 — Lista Clave-Valor con Copiado al Portapapeles por Fila'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-badges-data-copyable-spec-grid" data-active={active}>
      <h3>{title}</h3>
      <p>Haz clic en cualquier valor técnico (API Key, Host, SHA) para copiarlo instantáneamente.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
