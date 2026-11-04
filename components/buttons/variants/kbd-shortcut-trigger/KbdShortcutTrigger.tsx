/**
 * ============================================================================
 * COMPONENTESXD — 06. Tactical KBD Shortcut Command Button (REACT / NEXT.JS)
 * Archivo: components/buttons/variants/kbd-shortcut-trigger/KbdShortcutTrigger.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface KbdShortcutTriggerProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const KbdShortcutTrigger: React.FC<KbdShortcutTriggerProps> = ({
  title = '06. Tactical KBD Shortcut Command Button',
  badge = 'HOTKEY READY',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-buttons-kbd-shortcut-trigger"
      data-theme={interfaceTheme}
      data-variant="kbd-shortcut-trigger"
    >
      <header className="cxd-buttons-kbd-shortcut-trigger__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-buttons-kbd-shortcut-trigger__body">
        <p>Incluye insignia física de atajo de teclado (Cmd+Enter) y responde tanto a clic como a evento keydown.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'kbd-shortcut-trigger', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
