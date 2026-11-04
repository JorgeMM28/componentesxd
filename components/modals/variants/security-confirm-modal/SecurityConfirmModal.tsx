/**
 * Variante 05 — Modal de Confirmación con Validación de Texto — React / Next.js (TSX)
 * Archivo: components/modals/variants/security-confirm-modal/SecurityConfirmModal.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const SecurityConfirmModal: React.FC<{ title?: string }> = ({
  title = 'Variante 05 — Modal de Confirmación con Validación de Texto'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-modals-security-confirm-modal" data-active={active}>
      <h3>{title}</h3>
      <p>Escribe "ELIMINAR" en el campo de confirmación para desbloquear el botón destructivo.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
