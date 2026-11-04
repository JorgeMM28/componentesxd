/**
 * ============================================================================
 * COMPONENTESXD — 01. Command Palette (Cmd+K) Action Center (REACT / NEXT.JS)
 * Archivo: components/modals/variants/raycast-command-palette/RaycastCommandPalette.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface RaycastCommandPaletteProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const RaycastCommandPalette: React.FC<RaycastCommandPaletteProps> = ({
  title = '01. Command Palette (Cmd+K) Action Center',
  badge = 'CMD+K PALETTE',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-modals-raycast-command-palette"
      data-theme={interfaceTheme}
      data-variant="raycast-command-palette"
    >
      <header className="cxd-modals-raycast-command-palette__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-modals-raycast-command-palette__body">
        <p>Buscador universal de comandos con filtrado instantáneo, navegación por flechas y atajos de teclado.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'raycast-command-palette', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
