/**
 * ============================================================================
 * COMPONENTESXD — 07. Multi-File Upload Progress Toaster (REACT / NEXT.JS)
 * Archivo: components/toasts/variants/floating-upload-Dock/FloatingUploadDock.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface FloatingUploadDockProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const FloatingUploadDock: React.FC<FloatingUploadDockProps> = ({
  title = '07. Multi-File Upload Progress Toaster',
  badge = 'UPLOAD MANAGER',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-toasts-floating-upload-Dock"
      data-theme={interfaceTheme}
      data-variant="floating-upload-Dock"
    >
      <header className="cxd-toasts-floating-upload-Dock__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-toasts-floating-upload-Dock__body">
        <p>Panel flotante compacto con barra de transferencia en tiempo real, velocidad MB/s y control de cancelación.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'floating-upload-Dock', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
