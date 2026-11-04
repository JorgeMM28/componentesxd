/**
 * ============================================================================
 * COMPONENTESXD — 06. Security Audit & Diff History Table (REACT / NEXT.JS)
 * Archivo: components/tables/variants/compact-audit-trail/CompactAuditTrail.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface CompactAuditTrailProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const CompactAuditTrail: React.FC<CompactAuditTrailProps> = ({
  title = '06. Security Audit & Diff History Table',
  badge = 'SECURITY AUDIT',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-tables-compact-audit-trail"
      data-theme={interfaceTheme}
      data-variant="compact-audit-trail"
    >
      <header className="cxd-tables-compact-audit-trail__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-tables-compact-audit-trail__body">
        <p>Registro inmutable de eventos de seguridad con dirección IP, hash criptográfico, actor y diff de cambios inline.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'compact-audit-trail', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
