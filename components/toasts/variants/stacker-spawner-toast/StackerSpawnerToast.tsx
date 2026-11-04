/**
 * Variante 05 — Generador Interactivo de Pila de Toasters — React / Next.js (TSX)
 * Archivo: components/toasts/variants/stacker-spawner-toast/StackerSpawnerToast.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const StackerSpawnerToast: React.FC<{ title?: string }> = ({
  title = 'Variante 05 — Generador Interactivo de Pila de Toasters'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-toasts-stacker-spawner-toast" data-active={active}>
      <h3>{title}</h3>
      <p>Haz clic en los botones para disparar toasters reales de Éxito, Alerta o Error que se apilan con Anime.js.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
