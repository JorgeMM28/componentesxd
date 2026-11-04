/**
 * Variante 07 — Tarjeta Content-Fit Compacta de Telemetría — React / Next.js (TSX)
 * Archivo: components/cards/variants/content-fit-kpi-badge/ContentFitKpiBadge.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ContentFitKpiBadge: React.FC<{ title?: string }> = ({
  title = 'Variante 07 — Tarjeta Content-Fit Compacta de Telemetría'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-cards-content-fit-kpi-badge" data-active={active}>
      <h3>{title}</h3>
      <p>Ocupa únicamente el espacio exacto de su cifra, sparkline SVG y variación porcentual.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
