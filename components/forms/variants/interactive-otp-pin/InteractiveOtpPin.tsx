/**
 * Variante 05 — Matriz Interactiva OTP de 6 Dígitos (Auto-Avance) — React / Next.js (TSX)
 * Archivo: components/forms/variants/interactive-otp-pin/InteractiveOtpPin.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const InteractiveOtpPin: React.FC<{ title?: string }> = ({
  title = 'Variante 05 — Matriz Interactiva OTP de 6 Dígitos (Auto-Avance)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-forms-interactive-otp-pin" data-active={active}>
      <h3>{title}</h3>
      <p>Escribe números para avanzar automáticamente de casilla o usa el botón de autocompletar código.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
