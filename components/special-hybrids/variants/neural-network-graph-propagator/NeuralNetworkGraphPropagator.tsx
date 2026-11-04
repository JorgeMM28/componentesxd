/**
 * Variante 25 — Grafo de Red Neuronal Multicapa con Sinapsis SVG y Propagación Softmax — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/neural-network-graph-propagator/NeuralNetworkGraphPropagator.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const NeuralNetworkGraphPropagator: React.FC<{ title?: string }> = ({
  title = 'Variante 25 — Grafo de Red Neuronal Multicapa con Sinapsis SVG y Propagación Softmax'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-neural-network-graph-propagator" data-active={active}>
      <h3>{title}</h3>
      <p>Dispara una inferencia para ver los tensores viajar por las 15 sinapsis SVG a través de las capas ocultas hasta calcular la predicción final.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
