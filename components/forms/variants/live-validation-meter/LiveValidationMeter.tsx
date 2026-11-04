/**
 * Variante 06 — Formulario con Validación y Medidor de Seguridad en Vivo — React / Next.js (TSX)
 * Archivo: components/forms/variants/live-validation-meter/LiveValidationMeter.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const LiveValidationMeter: React.FC<{ title?: string }> = ({
  title = 'Variante 06 — Formulario con Validación y Medidor de Seguridad en Vivo'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-forms-live-validation-meter" data-active={active}>
      <h3>{title}</h3>
      <p>Escribe una contraseña para ver cómo se calculan en tiempo real los 4 niveles de fortaleza.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
