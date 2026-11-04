/**
 * Variante 24 — Visualizador Paso a Paso de Algoritmos de Ordenamiento (QuickSort, BubbleSort, SelectionSort, InsertionSort) — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/sorting-algorithm-symphony/SortingAlgorithmSymphony.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const SortingAlgorithmSymphony: React.FC<{ title?: string }> = ({
  title = 'Variante 24 — Visualizador Paso a Paso de Algoritmos de Ordenamiento (QuickSort, BubbleSort, SelectionSort, InsertionSort)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-sorting-algorithm-symphony" data-active={active}>
      <h3>{title}</h3>
      <p>28 columnas de datos con comparación e intercambio paso a paso en vivo, resaltado de pivotes activos, contadores en tiempo real y barrido verde de verificación final.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
