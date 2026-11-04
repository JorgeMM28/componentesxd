/**
 * ============================================================================
 * COMPONENTESXD — 05. Inline Editable Data Sheet (REACT / NEXT.JS)
 * Archivo: components/tables/variants/inline-editable-sheet/InlineEditableSheet.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface InlineEditableSheetProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const InlineEditableSheet: React.FC<InlineEditableSheetProps> = ({
  title = '05. Inline Editable Data Sheet',
  badge = 'SPREADSHEET UI',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-tables-inline-editable-sheet"
      data-theme={interfaceTheme}
      data-variant="inline-editable-sheet"
    >
      <header className="cxd-tables-inline-editable-sheet__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-tables-inline-editable-sheet__body">
        <p>Celdas editables directamente al hacer clic con resaltado de celda activa, validación instantánea y navegación por teclado.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'inline-editable-sheet', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
