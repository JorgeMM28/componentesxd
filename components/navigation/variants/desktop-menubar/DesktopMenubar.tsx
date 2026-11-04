/**
 * Variante 08 — Menubar Desktop Clásico con Menús Flotantes (Archivo, Edición, Git) — React / Next.js (TSX)
 * Archivo: components/navigation/variants/desktop-menubar/DesktopMenubar.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const DesktopMenubar: React.FC<{ title?: string }> = ({
  title = 'Variante 08 — Menubar Desktop Clásico con Menús Flotantes (Archivo, Edición, Git)'
}) => {
  const [active, setActive] = useState(false);
  return (
    <nav className="cxd-navigation-desktop-menubar" data-active={active}>
      <h3>{title}</h3>
      <p>Barra horizontal estilo aplicación de escritorio con menús desplegables en cascada al hacer hover o clic, atajos de teclado e indicador de sync.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </nav>
  );
};
