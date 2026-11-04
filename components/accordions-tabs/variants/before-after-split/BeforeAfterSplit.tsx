/**
 * Variante 03 — Comparador Visual Before / After con Cortina Deslizable — React / Next.js (TSX)
 * Archivo: components/accordions-tabs/variants/before-after-split/BeforeAfterSplit.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const BeforeAfterSplit: React.FC<{ title?: string }> = ({
  title = 'Variante 03 — Comparador Visual Before / After con Cortina Deslizable'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-accordions-tabs-before-after-split" data-active={active}>
      <h3>{title}</h3>
      <p>Arrastra el control divisor horizontal para comparar en tiempo real dos estados o arquitecturas superpuestas.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
