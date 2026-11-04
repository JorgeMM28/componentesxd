/**
 * Variante 21 — Escenario Relojería Cinética & Onda Radial (Inspirado en el Hero Oficial de Anime.js v4) — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/anime-hero-clockwork/AnimeHeroClockwork.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const AnimeHeroClockwork: React.FC<{ title?: string }> = ({
  title = 'Variante 21 — Escenario Relojería Cinética & Onda Radial (Inspirado en el Hero Oficial de Anime.js v4)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-anime-hero-clockwork" data-active={active}>
      <h3>{title}</h3>
      <p>36 vectores radiales concéntricos, anillos orbitales y matriz sincronizada que ejecutan coreografías de relojería, explosión solar, vórtice espiral y pulso cuántico.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
