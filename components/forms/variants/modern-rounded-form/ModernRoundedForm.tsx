/**
 * Variante 01 — Formulario Moderno con Bordes Redondeados — React / Next.js (TSX)
 * Archivo: components/forms/variants/modern-rounded-form/ModernRoundedForm.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ModernRoundedForm: React.FC<{ title?: string }> = ({
  title = 'Variante 01 — Formulario Moderno con Bordes Redondeados'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-forms-modern-rounded-form" data-active={active}>
      <h3>{title}</h3>
      <p>Campos con esquinas suaves de 12px, iconos SVG integrados a la izquierda y anillo de enfoque suave.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
