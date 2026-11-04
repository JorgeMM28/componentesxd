/**
 * Variante 02 — Tabla Styleless (Sin Bordes / Editorial) — React / Next.js (TSX)
 * Archivo: components/tables/variants/styleless-minimal/StylelessMinimal.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const StylelessMinimal: React.FC<{ title?: string }> = ({
  title = 'Variante 02 — Tabla Styleless (Sin Bordes / Editorial)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-tables-styleless-minimal" data-active={active}>
      <h3>{title}</h3>
      <p>Sin contenedor exterior ni líneas verticales. Puramente tipográfica con alineación generosa y subrayado sutil.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
