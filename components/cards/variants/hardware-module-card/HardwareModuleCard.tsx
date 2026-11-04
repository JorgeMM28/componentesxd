/**
 * ============================================================================
 * COMPONENTESXD — 08. Teenage-Style Hardware Synth Module Card (REACT / NEXT.JS)
 * Archivo: components/cards/variants/hardware-module-card/HardwareModuleCard.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface HardwareModuleCardProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const HardwareModuleCard: React.FC<HardwareModuleCardProps> = ({
  title = '08. Teenage-Style Hardware Synth Module Card',
  badge = 'INDUSTRIAL UI',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-cards-hardware-module-card"
      data-theme={interfaceTheme}
      data-variant="hardware-module-card"
    >
      <header className="cxd-cards-hardware-module-card__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-cards-hardware-module-card__body">
        <p>Estética de módulo físico con tornillos vectoriales en las esquinas, indicadores LED y lecturas mono.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'hardware-module-card', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
