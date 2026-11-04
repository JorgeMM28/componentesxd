/**
 * Variante 09 — Tabla Expandible Master-Detail (Despliegue de Sub-Panel) — React / Next.js (TSX)
 * Archivo: components/tables/variants/expandable-detail/ExpandableDetail.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ExpandableDetail: React.FC<{ title?: string }> = ({
  title = 'Variante 09 — Tabla Expandible Master-Detail (Despliegue de Sub-Panel)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-tables-expandable-detail" data-active={active}>
      <h3>{title}</h3>
      <p>Haz clic en cualquier fila para desplegar un panel técnico con historial, métricas y especificaciones.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
