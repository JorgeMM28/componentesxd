/**
 * Variante 01 — Toaster Moderno Flotante con Barra de Tiempo — React / Next.js (TSX)
 * Archivo: components/toasts/variants/modern-floating-toast/ModernFloatingToast.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const ModernFloatingToast: React.FC<{ title?: string }> = ({
  title = 'Variante 01 — Toaster Moderno Flotante con Barra de Tiempo'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-toasts-modern-floating-toast" data-active={active}>
      <h3>{title}</h3>
      <p>Bordes redondeados suaves, icono en cápsula, botón de reinicio de barra de progreso y cierre animado.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
