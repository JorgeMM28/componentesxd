/**
 * Variante 08 — Carrusel Mazo de Tarjetas con Descarte Elástico (Swipe / Throw Deck) — React / Next.js (TSX)
 * Archivo: components/carousels/variants/card-deck-throw/CardDeckThrow.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const CardDeckThrow: React.FC<{ title?: string }> = ({
  title = 'Variante 08 — Carrusel Mazo de Tarjetas con Descarte Elástico (Swipe / Throw Deck)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-carousels-card-deck-throw" data-active={active}>
      <h3>{title}</h3>
      <p>Pila interactiva donde cada acción lanza la tarjeta activa con rotación física y promueve la siguiente del mazo.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
