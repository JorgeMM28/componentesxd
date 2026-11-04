/**
 * Variante 19 — Transferencia Dual de Módulos + Sincronización Masiva en Cascada — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/dual-transfer-stagger-sync/DualTransferStaggerSync.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const DualTransferStaggerSync: React.FC<{ title?: string }> = ({
  title = 'Variante 19 — Transferencia Dual de Módulos + Sincronización Masiva en Cascada'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-dual-transfer-stagger-sync" data-active={active}>
      <h3>{title}</h3>
      <p>Mueve módulos uno por uno o transfiere todo el bloque con una animación escalonada de Anime.js.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
