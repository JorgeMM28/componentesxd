/**
 * ============================================================================
 * COMPONENTESXD — 07. Drag & Drop Artifact Dropzone (REACT / NEXT.JS)
 * Archivo: components/forms/variants/file-dropzone-inspector/FileDropzoneInspector.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface FileDropzoneInspectorProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const FileDropzoneInspector: React.FC<FileDropzoneInspectorProps> = ({
  title = '07. Drag & Drop Artifact Dropzone',
  badge = 'FILE UPLOAD',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-forms-file-dropzone-inspector"
      data-theme={interfaceTheme}
      data-variant="file-dropzone-inspector"
    >
      <header className="cxd-forms-file-dropzone-inspector__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-forms-file-dropzone-inspector__body">
        <p>Zona de carga con borde punteado reactivo, validación de extensión/tamaño y vista previa del archivo.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'file-dropzone-inspector', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
