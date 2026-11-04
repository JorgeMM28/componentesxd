/**
 * Variante 06 — Barra de Paginación Interactiva con Salto de Página — React / Next.js (TSX)
 * Archivo: components/navigation/variants/interactive-pagination/InteractivePagination.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const InteractivePagination: React.FC<{ title?: string }> = ({
  title = 'Variante 06 — Barra de Paginación Interactiva con Salto de Página'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-navigation-interactive-pagination" data-active={active}>
      <h3>{title}</h3>
      <p>Haz clic en los números o botones Anterior/Siguiente para actualizar la página activa en vivo.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
