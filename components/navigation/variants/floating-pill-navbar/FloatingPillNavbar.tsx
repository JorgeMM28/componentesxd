/**
 * Variante 02 — Navbar Flotante Redondeada Tipo Cápsula — React / Next.js (TSX)
 * Archivo: components/navigation/variants/floating-pill-navbar/FloatingPillNavbar.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const FloatingPillNavbar: React.FC<{ title?: string }> = ({
  title = 'Variante 02 — Navbar Flotante Redondeada Tipo Cápsula'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-navigation-floating-pill-navbar" data-active={active}>
      <h3>{title}</h3>
      <p>Barra superior centrada con bordes completamente redondeados, enlaces activos y botón CTA.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
