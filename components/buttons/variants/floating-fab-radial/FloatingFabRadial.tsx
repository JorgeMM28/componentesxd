/**
 * Variante 03 — Botón Flotante (FAB) con Menú Desplegable — React / Next.js (TSX)
 * Archivo: components/buttons/variants/floating-fab-radial/FloatingFabRadial.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const FloatingFabRadial: React.FC<{ title?: string }> = ({
  title = 'Variante 03 — Botón Flotante (FAB) con Menú Desplegable'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-buttons-floating-fab-radial" data-active={active}>
      <h3>{title}</h3>
      <p>Botón circular flotante que al hacer clic despliega 3 acciones satélite con física elástica.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
