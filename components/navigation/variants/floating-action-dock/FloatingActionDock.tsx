/**
 * Variante 05 — Dock Flotante Inferior con Escalado al Pasar el Cursor — React / Next.js (TSX)
 * Archivo: components/navigation/variants/floating-action-dock/FloatingActionDock.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const FloatingActionDock: React.FC<{ title?: string }> = ({
  title = 'Variante 05 — Dock Flotante Inferior con Escalado al Pasar el Cursor'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-navigation-floating-action-dock" data-active={active}>
      <h3>{title}</h3>
      <p>Barra de iconos de acceso rápido con insignias de estado e indicador de aplicación activa.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
