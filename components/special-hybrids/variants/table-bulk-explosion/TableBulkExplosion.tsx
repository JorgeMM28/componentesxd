/**
 * Variante 07 — Tabla Multi-Selección + Dock Flotante + Purga/Restauración Animada — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/table-bulk-explosion/TableBulkExplosion.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const TableBulkExplosion: React.FC<{ title?: string }> = ({
  title = 'Variante 07 — Tabla Multi-Selección + Dock Flotante + Purga/Restauración Animada'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-table-bulk-explosion" data-active={active}>
      <h3>{title}</h3>
      <p>Marca varias filas para desplegar la barra de acción y ejecuta purga en cascada o restauración completa con Anime.js.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
