/**
 * Variante 02 — Acordeón Multi-Apertura con Insignias de Estado y Buscador — React / Next.js (TSX)
 * Archivo: components/accordions-tabs/variants/accordion-multi-bento/AccordionMultiBento.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const AccordionMultiBento: React.FC<{ title?: string }> = ({
  title = 'Variante 02 — Acordeón Multi-Apertura con Insignias de Estado y Buscador'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-accordions-tabs-accordion-multi-bento" data-active={active}>
      <h3>{title}</h3>
      <p>Permite mantener varios módulos abiertos al mismo tiempo o expandir/colapsar todos con un solo clic.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
