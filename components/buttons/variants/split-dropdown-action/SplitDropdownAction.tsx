/**
 * Variante 06 — Botón con Menú de Acciones (Split Dropdown) — React / Next.js (TSX)
 * Archivo: components/buttons/variants/split-dropdown-action/SplitDropdownAction.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const SplitDropdownAction: React.FC<{ title?: string }> = ({
  title = 'Variante 06 — Botón con Menú de Acciones (Split Dropdown)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-buttons-split-dropdown-action" data-active={active}>
      <h3>{title}</h3>
      <p>Botón dividido: la izquierda ejecuta la acción seleccionada y la derecha despliega la lista de modos.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
