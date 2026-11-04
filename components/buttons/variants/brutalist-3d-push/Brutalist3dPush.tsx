/**
 * Variante 08 — Botón Mecánico 3D de Presión Física — React / Next.js (TSX)
 * Archivo: components/buttons/variants/brutalist-3d-push/Brutalist3dPush.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const Brutalist3dPush: React.FC<{ title?: string }> = ({
  title = 'Variante 08 — Botón Mecánico 3D de Presión Física'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-buttons-brutalist-3d-push" data-active={active}>
      <h3>{title}</h3>
      <p>Borde grueso y sombra sólida inferior que se hunde físicamente cada vez que lo presionas.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
