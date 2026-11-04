/**
 * ============================================================================
 * COMPONENTESXD — 03. Critical Action Verification Modal (REACT / NEXT.JS)
 * Archivo: components/modals/variants/destructive-confirm-dialog/DestructiveConfirmDialog.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface DestructiveConfirmDialogProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const DestructiveConfirmDialog: React.FC<DestructiveConfirmDialogProps> = ({
  title = '03. Critical Action Verification Modal',
  badge = 'SAFETY DIALOG',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-modals-destructive-confirm-dialog"
      data-theme={interfaceTheme}
      data-variant="destructive-confirm-dialog"
    >
      <header className="cxd-modals-destructive-confirm-dialog__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-modals-destructive-confirm-dialog__body">
        <p>Diálogo de seguridad que solicita escribir el nombre del recurso antes de habilitar el botón de borrado.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'destructive-confirm-dialog', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
