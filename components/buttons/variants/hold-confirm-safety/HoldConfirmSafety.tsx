/**
 * Variante 05 — Botón con Seguridad Hold-to-Confirm (Mantener Presionado) — React / Next.js (TSX)
 * Archivo: components/buttons/variants/hold-confirm-safety/HoldConfirmSafety.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const HoldConfirmSafety: React.FC<{ title?: string }> = ({
  title = 'Variante 05 — Botón con Seguridad Hold-to-Confirm (Mantener Presionado)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-buttons-hold-confirm-safety" data-active={active}>
      <h3>{title}</h3>
      <p>Mantén presionado el botón para llenar la barra de progreso roja hasta el 100% y ejecutar la acción.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
