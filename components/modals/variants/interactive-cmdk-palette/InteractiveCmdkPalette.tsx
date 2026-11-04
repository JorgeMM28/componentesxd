/**
 * Variante 02 — Command Palette Interactiva (Buscador en Vivo) — React / Next.js (TSX)
 * Archivo: components/modals/variants/interactive-cmdk-palette/InteractiveCmdkPalette.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const InteractiveCmdkPalette: React.FC<{ title?: string }> = ({
  title = 'Variante 02 — Command Palette Interactiva (Buscador en Vivo)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-modals-interactive-cmdk-palette" data-active={active}>
      <h3>{title}</h3>
      <p>Escribe en el buscador para filtrar comandos al instante y haz clic en cualquiera para ejecutarlo.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
