/**
 * Variante 02 — Laravel 11 + Livewire 3 + PHP 8.3 FPM + OPcache — React / Next.js (TSX)
 * Archivo: components/docker/variants/laravel-livewire-fpm/LaravelLivewireFpm.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const LaravelLivewireFpm: React.FC<{ title?: string }> = ({
  title = 'Variante 02 — Laravel 11 + Livewire 3 + PHP 8.3 FPM + OPcache'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-docker-laravel-livewire-fpm" data-active={active}>
      <h3>{title}</h3>
      <p>Imagen lista para Laravel y Blade con OPcache JIT, Redis, PostgreSQL y Composer 2.8.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
