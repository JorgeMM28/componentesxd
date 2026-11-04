/**
 * Variante 03 — React / Vue / Svelte / Angular SPA + Nginx — React / Next.js (TSX)
 * Archivo: components/docker/variants/spa-nginx-alpine/SpaNginxAlpine.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const SpaNginxAlpine: React.FC<{ title?: string }> = ({
  title = 'Variante 03 — React / Vue / Svelte / Angular SPA + Nginx'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-docker-spa-nginx-alpine" data-active={active}>
      <h3>{title}</h3>
      <p>Compilación estática servida por Nginx Alpine con compresión gzip y try_files para rutas SPA.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
