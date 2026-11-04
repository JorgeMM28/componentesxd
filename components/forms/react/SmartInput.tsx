/**
 * ============================================================================
 * COMPONENTESXD — SMART FLOATING INPUT & OTP (REACT)
 * Archivo: components/forms/react/SmartInput.tsx
 * ============================================================================
 */
import React, { useRef } from 'react';
import '../css-scss/forms.css';

export const SmartFloatingInput: React.FC<{
  label: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
}> = ({ label, type = 'text', value, onChange }) => (
  <div className="cxd-field">
    <div className="cxd-floating-wrap">
      <input
        type={type}
        value={value}
        placeholder=" "
        onChange={(e) => onChange(e.target.value)}
        className="cxd-floating-input"
      />
      <label className="cxd-floating-label">{label}</label>
    </div>
  </div>
);

export const OtpPinInput: React.FC<{
  length?: number;
  onComplete?: (code: string) => void;
}> = ({ length = 6, onComplete }) => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (idx: number, val: string) => {
    const digit = val.replace(/\D/g, '').slice(-1);
    if (inputsRef.current[idx]) {
      inputsRef.current[idx]!.value = digit;
    }
    if (digit && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
    const code = inputsRef.current.map((el) => el?.value || '').join('');
    if (code.length === length) onComplete?.(code);
  };

  return (
    <div className="cxd-otp-grid">
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          ref={(el) => {
            inputsRef.current[idx] = el;
          }}
          maxLength={1}
          inputMode="numeric"
          className="cxd-otp-slot"
          onChange={(e) => handleChange(idx, e.target.value)}
        />
      ))}
    </div>
  );
};

