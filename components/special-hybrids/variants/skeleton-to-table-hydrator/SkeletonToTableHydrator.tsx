/**
 * Variante 12 — Tabla con Skeleton Cargando → Hidratación Real Escalonada — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/skeleton-to-table-hydrator/SkeletonToTableHydrator.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const SkeletonToTableHydrator: React.FC<{ title?: string }> = ({
  title = 'Variante 12 — Tabla con Skeleton Cargando → Hidratación Real Escalonada'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-skeleton-to-table-hydrator" data-active={active}>
      <h3>{title}</h3>
      <p>Conmuta entre el estado de carga (Skeleton Shimmer) y la tabla hidratada con entrada escalonada por fila.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
