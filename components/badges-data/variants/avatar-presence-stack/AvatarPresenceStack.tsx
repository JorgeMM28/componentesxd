/**
 * ============================================================================
 * COMPONENTESXD — 05. Collaborator Avatar Stack + Presence Ring (REACT / NEXT.JS)
 * Archivo: components/badges-data/variants/avatar-presence-stack/AvatarPresenceStack.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface AvatarPresenceStackProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const AvatarPresenceStack: React.FC<AvatarPresenceStackProps> = ({
  title = '05. Collaborator Avatar Stack + Presence Ring',
  badge = 'PRESENCE UI',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-badges-data-avatar-presence-stack"
      data-theme={interfaceTheme}
      data-variant="avatar-presence-stack"
    >
      <header className="cxd-badges-data-avatar-presence-stack__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-badges-data-avatar-presence-stack__body">
        <p>Grupo superpuesto de colaboradores activos con contador de excedente (+8) y estado online.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'avatar-presence-stack', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
