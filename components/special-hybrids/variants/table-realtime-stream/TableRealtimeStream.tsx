/**
 * Variante 02 — Tabla Reactiva + Formulario de Inserción/Eliminación en Tiempo Real con Anime.js — React / Next.js (TSX)
 * Archivo: components/special-hybrids/variants/table-realtime-stream/TableRealtimeStream.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const TableRealtimeStream: React.FC<{ title?: string }> = ({
  title = 'Variante 02 — Tabla Reactiva + Formulario de Inserción/Eliminación en Tiempo Real con Anime.js'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-special-hybrids-table-realtime-stream" data-active={active}>
      <h3>{title}</h3>
      <p>Agrega nuevos registros desde el formulario integrado con animación spring de entrada, recálculo de suma animada y eliminación con colapso suave.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
