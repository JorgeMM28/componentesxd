/**
 * Variante 04 — Botón Interactivo de 3 Estados (Reposo -> Cargando -> Éxito) — React / Next.js (TSX)
 * Archivo: components/buttons/variants/interactive-async-morph/InteractiveAsyncMorph.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const InteractiveAsyncMorph: React.FC<{ title?: string }> = ({
  title = 'Variante 04 — Botón Interactivo de 3 Estados (Reposo -> Cargando -> Éxito)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-buttons-interactive-async-morph" data-active={active}>
      <h3>{title}</h3>
      <p>Haz clic para ver cómo bloquea la acción, muestra el spinner rotativo y cambia a estado completado.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
