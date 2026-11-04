/**
 * Variante 06 — Proxy Inverso Traefik v3 con Balanceo Automático — React / Next.js (TSX)
 * Archivo: components/docker/variants/traefik-tls-proxy/TraefikTlsProxy.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const TraefikTlsProxy: React.FC<{ title?: string }> = ({
  title = 'Variante 06 — Proxy Inverso Traefik v3 con Balanceo Automático'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-docker-traefik-tls-proxy" data-active={active}>
      <h3>{title}</h3>
      <p>Enrutamiento dinámico por etiquetas de contenedor y certificados TLS automáticos.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
