/**
 * Variante 06 — Grupo de Avatares Flotantes con Inspector de Usuario — React / Next.js (TSX)
 * Archivo: components/badges-data/variants/avatar-stack-interactive/AvatarStackInteractive.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const AvatarStackInteractive: React.FC<{ title?: string }> = ({
  title = 'Variante 06 — Grupo de Avatares Flotantes con Inspector de Usuario'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-badges-data-avatar-stack-interactive" data-active={active}>
      <h3>{title}</h3>
      <p>Haz clic en cualquier miembro del equipo para ver su rol, estado y permisos activos.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
