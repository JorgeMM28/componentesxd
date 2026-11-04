/**
 * Variante 06 — Carrusel Galería con Tira Inferior de Miniaturas (Filmstrip) — React / Next.js (TSX)
 * Archivo: components/carousels/variants/thumbnail-filmstrip/ThumbnailFilmstrip.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ThumbnailFilmstrip: React.FC<{ title?: string }> = ({
  title = 'Variante 06 — Carrusel Galería con Tira Inferior de Miniaturas (Filmstrip)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-carousels-thumbnail-filmstrip" data-active={active}>
      <h3>{title}</h3>
      <p>Escenario principal de gran formato conectado a una banda interactiva de miniaturas con enfoque activo.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
