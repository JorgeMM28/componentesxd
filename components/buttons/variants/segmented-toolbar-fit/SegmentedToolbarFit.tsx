/**
 * Variante 07 — Barra de Botones Content-Fit con Indicador Activo — React / Next.js (TSX)
 * Archivo: components/buttons/variants/segmented-toolbar-fit/SegmentedToolbarFit.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const SegmentedToolbarFit: React.FC<{ title?: string }> = ({
  title = 'Variante 07 — Barra de Botones Content-Fit con Indicador Activo'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-buttons-segmented-toolbar-fit" data-active={active}>
      <h3>{title}</h3>
      <p>Grupo compacto unido donde la selección activa cambia instantáneamente al hacer clic.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
