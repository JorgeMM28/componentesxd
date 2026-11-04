/**
 * Variante 02 — Tarjeta Styleless Editorial (Sin Caja, Puro Layout) — React / Next.js (TSX)
 * Archivo: components/cards/variants/styleless-editorial/StylelessEditorial.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const StylelessEditorial: React.FC<{ title?: string }> = ({
  title = 'Variante 02 — Tarjeta Styleless Editorial (Sin Caja, Puro Layout)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-cards-styleless-editorial" data-active={active}>
      <h3>{title}</h3>
      <p>Diseño tipográfico tipo revista suiza con numeración grande, separador de 1px y lectura limpia.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
