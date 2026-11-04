/**
 * Variante 06 — Árbol de Directorios Colapsable con Inspector de Archivo Activo — React / Next.js (TSX)
 * Archivo: components/accordions-tabs/variants/file-tree-inspector/FileTreeInspector.tsx
 */
import React, { useState } from 'react';
import './styles.css';

export const FileTreeInspector: React.FC<{ title?: string }> = ({
  title = 'Variante 06 — Árbol de Directorios Colapsable con Inspector de Archivo Activo'
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="cxd-accordions-tabs-file-tree-inspector" data-active={active}>
      <h3>{title}</h3>
      <p>Estructura jerárquica de carpetas y archivos clicables que actualiza el visor de contenido derecho.</p>
      <button type="button" onClick={() => setActive(!active)}>
        Alternar Estado
      </button>
    </div>
  );
};
