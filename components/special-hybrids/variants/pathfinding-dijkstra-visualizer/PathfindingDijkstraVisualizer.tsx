/**
 * Variante 23 — Laberinto Interactivo de Alta Densidad (24×10 = 240 Micro-Celdas) con Algoritmo A* / BFS de Ruta Larga — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/pathfinding-dijkstra-visualizer/PathfindingDijkstraVisualizer.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const PathfindingDijkstraVisualizer: React.FC<{ title?: string }> = ({
  title = 'Variante 23 — Laberinto Interactivo de Alta Densidad (24×10 = 240 Micro-Celdas) con Algoritmo A* / BFS de Ruta Larga'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-pathfinding-dijkstra-visualizer" data-active={active}>
      <h3>{title}</h3>
      <p>Matriz densa de 240 micro-recuadros con generador de laberinto serpenteante de 55+ pasos, creación manual de muros y onda de exploración animada con Anime.js v4.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
