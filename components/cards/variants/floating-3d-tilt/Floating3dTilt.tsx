/**
 * Variante 03 — Tarjeta Flotante con Perspectiva 3D Interactiva — React / Next.js (TSX)
 * Archivo: components/cards/variants/floating-3d-tilt/Floating3dTilt.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const Floating3dTilt: React.FC<{ title?: string }> = ({
  title = 'Variante 03 — Tarjeta Flotante con Perspectiva 3D Interactiva'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-cards-floating-3d-tilt" data-active={active}>
      <h3>{title}</h3>
      <p>Mueve el cursor encima para inclinar la tarjeta en 3 ejes (rotateX / rotateY) con sombra profunda.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
