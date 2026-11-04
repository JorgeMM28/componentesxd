/**
 * Variante 02 — Dynamic Island Interactiva (3 Estados) — React / Next.js (TSX)
 * Archivo: components/toasts/variants/dynamic-island-morph/DynamicIslandMorph.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const DynamicIslandMorph: React.FC<{ title?: string }> = ({
  title = 'Variante 02 — Dynamic Island Interactiva (3 Estados)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-toasts-dynamic-island-morph" data-active={active}>
      <h3>{title}</h3>
      <p>Cápsula negra brillante que cambia de tamaño con Anime.js entre Compacto, Llamada/Proceso y Expandido.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
