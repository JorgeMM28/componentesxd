/**
 * Variante 15 — Command Palette + Consola de Ejecución Paso a Paso Animada — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/modal-command-choreography/ModalCommandChoreography.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ModalCommandChoreography: React.FC<{ title?: string }> = ({
  title = 'Variante 15 — Command Palette + Consola de Ejecución Paso a Paso Animada'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-modal-command-choreography" data-active={active}>
      <h3>{title}</h3>
      <p>Dispara cualquier comando de la lista para ejecutar una secuencia de terminal animada en tiempo real.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
