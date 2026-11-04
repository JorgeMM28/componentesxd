/**
 * Variante 03 — Menú Popover Flotante Content-Fit con Acciones — React / Next.js (TSX)
 * Archivo: components/modals/variants/floating-popover-menu/FloatingPopoverMenu.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const FloatingPopoverMenu: React.FC<{ title?: string }> = ({
  title = 'Variante 03 — Menú Popover Flotante Content-Fit con Acciones'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-modals-floating-popover-menu" data-active={active}>
      <h3>{title}</h3>
      <p>Menú contextual compacto con opciones rápidas, atajos de teclado e interruptor integrado.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
