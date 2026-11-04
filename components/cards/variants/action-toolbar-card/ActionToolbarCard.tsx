/**
 * Variante 05 — Tarjeta con Barra de Acciones (Favorito, Compartir, Archivar) — React / Next.js (TSX)
 * Archivo: components/cards/variants/action-toolbar-card/ActionToolbarCard.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ActionToolbarCard: React.FC<{ title?: string }> = ({
  title = 'Variante 05 — Tarjeta con Barra de Acciones (Favorito, Compartir, Archivar)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-cards-action-toolbar-card" data-active={active}>
      <h3>{title}</h3>
      <p>Incluye botones inferiores interactivos con contadores que se actualizan en tiempo real.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
