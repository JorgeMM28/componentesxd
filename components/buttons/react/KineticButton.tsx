/**
 * ============================================================================
 * COMPONENTESXD — KINETIC BUTTON (REACT + TYPESCRIPT)
 * Archivo: components/buttons/react/KineticButton.tsx
 * ============================================================================
 */
import React, { useRef, useState } from 'react';
import '../css-scss/buttons.css';

export interface KineticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'shimmer' | 'glass' | 'brutalist';
  magnetic?: boolean;
  loading?: boolean;
}

export const KineticButton: React.FC<KineticButtonProps> = ({
  variant = 'primary',
  magnetic = true,
  loading = false,
  children,
  className = '',
  ...rest
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - rect.left - rect.width / 2) * 0.25,
      y: (e.clientY - rect.top - rect.height / 2) * 0.25
    });
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      style={{
        transform: offset.x || offset.y ? `translate3d(${offset.x}px, ${offset.y}px, 0)` : undefined
      }}
      className={`cxd-btn cxd-btn--${variant} ${loading ? 'is-loading' : ''} ${className}`}
      {...rest}
    >
      <span className="cxd-btn__spinner" />
      <span>{children}</span>
    </button>
  );
};

