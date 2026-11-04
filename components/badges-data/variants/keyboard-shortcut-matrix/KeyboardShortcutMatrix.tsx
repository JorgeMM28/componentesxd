/**
 * ============================================================================
 * COMPONENTESXD — 07. Keyboard Shortcut Chord Display (REACT / NEXT.JS)
 * Archivo: components/badges-data/variants/keyboard-shortcut-matrix/KeyboardShortcutMatrix.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface KeyboardShortcutMatrixProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const KeyboardShortcutMatrix: React.FC<KeyboardShortcutMatrixProps> = ({
  title = '07. Keyboard Shortcut Chord Display',
  badge = 'KBD CHORDS',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-badges-data-keyboard-shortcut-matrix"
      data-theme={interfaceTheme}
      data-variant="keyboard-shortcut-matrix"
    >
      <header className="cxd-badges-data-keyboard-shortcut-matrix__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-badges-data-keyboard-shortcut-matrix__body">
        <p>Representación visual de combinaciones de teclas (Ctrl + Shift + P) con relieve táctil.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'keyboard-shortcut-matrix', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
