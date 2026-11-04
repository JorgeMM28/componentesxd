/**
 * ============================================================================
 * COMPONENTESXD — 02. 6-Digit 2FA OTP Auto-Advance Matrix (REACT / NEXT.JS)
 * Archivo: components/forms/variants/otp-security-matrix/OtpSecurityMatrix.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface OtpSecurityMatrixProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const OtpSecurityMatrix: React.FC<OtpSecurityMatrixProps> = ({
  title = '02. 6-Digit 2FA OTP Auto-Advance Matrix',
  badge = 'AUTH / 2FA',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-forms-otp-security-matrix"
      data-theme={interfaceTheme}
      data-variant="otp-security-matrix"
    >
      <header className="cxd-forms-otp-security-matrix__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-forms-otp-security-matrix__body">
        <p>Cuadrícula de 6 dígitos con salto automático al escribir, soporte de pegado completo y retroceso inteligente.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'otp-security-matrix', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
