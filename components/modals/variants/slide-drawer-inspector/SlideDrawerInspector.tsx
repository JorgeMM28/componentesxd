/**
 * Variante 06 — Panel Inspector Lateral (Drawer de Detalles) — React / Next.js (TSX)
 * Archivo: components/modals/variants/slide-drawer-inspector/SlideDrawerInspector.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const SlideDrawerInspector: React.FC<{ title?: string }> = ({
  title = 'Variante 06 — Panel Inspector Lateral (Drawer de Detalles)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-modals-slide-drawer-inspector" data-active={active}>
      <h3>{title}</h3>
      <p>Estructura de panel lateral con pestañas de propiedades, JSON en vivo y botones de acción.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
