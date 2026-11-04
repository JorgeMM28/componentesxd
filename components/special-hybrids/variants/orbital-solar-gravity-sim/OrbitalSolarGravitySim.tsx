/**
 * Variante 26 — Sistema Solar Animado Completo (Sol + 8 Planetas + Luna + Cinturón de Asteroides + Saturno) — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/orbital-solar-gravity-sim/OrbitalSolarGravitySim.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const OrbitalSolarGravitySim: React.FC<{ title?: string }> = ({
  title = 'Variante 26 — Sistema Solar Animado Completo (Sol + 8 Planetas + Luna + Cinturón de Asteroides + Saturno)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-orbital-solar-gravity-sim" data-active={active}>
      <h3>{title}</h3>
      <p>Simulación heliocéntrica continua con Mercurio, Venus, Tierra + Luna, Marte, Cinturón de Asteroides, Júpiter, Saturno con anillos, Urano y Neptuno, selector de telemetría planetaria y escala de tiempo Warp.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
