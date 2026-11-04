/**
 * ============================================================================
 * COMPONENTESXD — 04. Stepped Configuration Wizard Modal (REACT / NEXT.JS)
 * Archivo: components/modals/variants/multi-step-config-modal/MultiStepConfigModal.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface MultiStepConfigModalProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const MultiStepConfigModal: React.FC<MultiStepConfigModalProps> = ({
  title = '04. Stepped Configuration Wizard Modal',
  badge = 'WIZARD MODAL',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-modals-multi-step-config-modal"
      data-theme={interfaceTheme}
      data-variant="multi-step-config-modal"
    >
      <header className="cxd-modals-multi-step-config-modal__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-modals-multi-step-config-modal__body">
        <p>Ventana modal dividida en pasos con indicador de progreso superior y pie de navegación persistente.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'multi-step-config-modal', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
