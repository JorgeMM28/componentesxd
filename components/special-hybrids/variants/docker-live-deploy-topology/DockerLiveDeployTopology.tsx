/**
 * Variante 17 — Topología Docker + Simulador de Paquetes en Red con Anime.js — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/docker-live-deploy-topology/DockerLiveDeployTopology.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const DockerLiveDeployTopology: React.FC<{ title?: string }> = ({
  title = 'Variante 17 — Topología Docker + Simulador de Paquetes en Red con Anime.js'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-docker-live-deploy-topology" data-active={active}>
      <h3>{title}</h3>
      <p>Envía paquetes de prueba a través del proxy, aplicación y base de datos animando cada salto y latencia.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
