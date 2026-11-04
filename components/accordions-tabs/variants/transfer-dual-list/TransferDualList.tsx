/**
 * Variante 07 — Lista Dual de Transferencia (Mover Permisos Izquierda ↔ Derecha) — React / Next.js (TSX)
 * Archivo: components/accordions-tabs/variants/transfer-dual-list/TransferDualList.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const TransferDualList: React.FC<{ title?: string }> = ({
  title = 'Variante 07 — Lista Dual de Transferencia (Mover Permisos Izquierda ↔ Derecha)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-accordions-tabs-transfer-dual-list" data-active={active}>
      <h3>{title}</h3>
      <p>Selecciona y transfiere módulos entre la columna de Disponibles y la columna de Activos en tiempo real.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
