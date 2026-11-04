/**
 * Variante 02 — Acordeón Interactivo Multi-Sección — React / Next.js (TSX)
 * Archivo: components/badges-data/variants/interactive-accordion/InteractiveAccordion.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const InteractiveAccordion: React.FC<{ title?: string }> = ({
  title = 'Variante 02 — Acordeón Interactivo Multi-Sección'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-badges-data-interactive-accordion" data-active={active}>
      <h3>{title}</h3>
      <p>Haz clic en cualquier cabecera para expandir o contraer su contenido suavemente.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
