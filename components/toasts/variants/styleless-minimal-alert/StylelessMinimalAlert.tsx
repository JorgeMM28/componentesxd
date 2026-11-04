/**
 * Variante 06 — Alerta Styleless Minimalista (Tipografía + Línea) — React / Next.js (TSX)
 * Archivo: components/toasts/variants/styleless-minimal-alert/StylelessMinimalAlert.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const StylelessMinimalAlert: React.FC<{ title?: string }> = ({
  title = 'Variante 06 — Alerta Styleless Minimalista (Tipografía + Línea)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-toasts-styleless-minimal-alert" data-active={active}>
      <h3>{title}</h3>
      <p>Sin caja ni sombras: solo una línea vertical de 2px, texto directo y enlace de acción limpio.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
