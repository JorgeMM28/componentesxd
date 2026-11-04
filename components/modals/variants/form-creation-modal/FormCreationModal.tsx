/**
 * Variante 04 — Modal con Formulario de Creación de Proyecto — React / Next.js (TSX)
 * Archivo: components/modals/variants/form-creation-modal/FormCreationModal.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const FormCreationModal: React.FC<{ title?: string }> = ({
  title = 'Variante 04 — Modal con Formulario de Creación de Proyecto'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-modals-form-creation-modal" data-active={active}>
      <h3>{title}</h3>
      <p>Diálogo completo con inputs de nombre, selector de región, visibilidad y envío interactivo.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
