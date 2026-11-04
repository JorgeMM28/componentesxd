/**
 * Variante 03 — Tabla Content-Fit (Ajustada al Contenido) — React / Next.js (TSX)
 * Archivo: components/tables/variants/content-fit-compact/ContentFitCompact.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ContentFitCompact: React.FC<{ title?: string }> = ({
  title = 'Variante 03 — Tabla Content-Fit (Ajustada al Contenido)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-tables-content-fit-compact" data-active={active}>
      <h3>{title}</h3>
      <p>Ancho automático exacto al texto (width: max-content), celdas ultra-compactas sin espacio desperdiciado.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
