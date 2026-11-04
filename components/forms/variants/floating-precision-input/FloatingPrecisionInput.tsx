/**
 * ============================================================================
 * COMPONENTESXD — 01. Architectural Floating-Label Input (REACT / NEXT.JS)
 * Archivo: components/forms/variants/floating-precision-input/FloatingPrecisionInput.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface FloatingPrecisionInputProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const FloatingPrecisionInput: React.FC<FloatingPrecisionInputProps> = ({
  title = '01. Architectural Floating-Label Input',
  badge = 'FLOATING LABEL',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-forms-floating-precision-input"
      data-theme={interfaceTheme}
      data-variant="floating-precision-input"
    >
      <header className="cxd-forms-floating-precision-input__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-forms-floating-precision-input__body">
        <p>Etiqueta que asciende con transición cúbica al enfocar o contener valor, con indicador de validación.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'floating-precision-input', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
