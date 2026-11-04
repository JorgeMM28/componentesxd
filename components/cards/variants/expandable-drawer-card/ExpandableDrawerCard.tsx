/**
 * Variante 08 — Tarjeta con Despliegue de Detalles Técnicos — React / Next.js (TSX)
 * Archivo: components/cards/variants/expandable-drawer-card/ExpandableDrawerCard.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ExpandableDrawerCard: React.FC<{ title?: string }> = ({
  title = 'Variante 08 — Tarjeta con Despliegue de Detalles Técnicos'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-cards-expandable-drawer-card" data-active={active}>
      <h3>{title}</h3>
      <p>Haz clic en el botón de expansión para revelar u ocultar el bloque completo de logs y nodos.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
