/**
 * Variante 07 — Banner Content-Fit Flotante Tipo Píldora — React / Next.js (TSX)
 * Archivo: components/toasts/variants/content-fit-pill-banner/ContentFitPillBanner.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ContentFitPillBanner: React.FC<{ title?: string }> = ({
  title = 'Variante 07 — Banner Content-Fit Flotante Tipo Píldora'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-toasts-content-fit-pill-banner" data-active={active}>
      <h3>{title}</h3>
      <p>Ajustado exactamente al ancho del mensaje con insignia de novedad y botón de acción compacto.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
