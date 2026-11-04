/**
 * Variante 01 — Modal Moderno con Bordes Redondeados y Blur — React / Next.js (TSX)
 * Archivo: components/modals/variants/modern-glass-modal/ModernGlassModal.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ModernGlassModal: React.FC<{ title?: string }> = ({
  title = 'Variante 01 — Modal Moderno con Bordes Redondeados y Blur'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-modals-modern-glass-modal" data-active={active}>
      <h3>{title}</h3>
      <p>Ventana de diálogo con cabecera limpia, cuerpo estructurado y botones que abren/cierran la vista.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
