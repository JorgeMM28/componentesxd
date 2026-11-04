/**
 * ============================================================================
 * COMPONENTESXD — 06. Full Pagination + Page Size Selector Bar (REACT / NEXT.JS)
 * Archivo: components/navigation/variants/pagination-matrix-bar/PaginationMatrixBar.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface PaginationMatrixBarProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const PaginationMatrixBar: React.FC<PaginationMatrixBarProps> = ({
  title = '06. Full Pagination + Page Size Selector Bar',
  badge = 'PAGINATION',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-navigation-pagination-matrix-bar"
      data-theme={interfaceTheme}
      data-variant="pagination-matrix-bar"
    >
      <header className="cxd-navigation-pagination-matrix-bar__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-navigation-pagination-matrix-bar__body">
        <p>Control de paginación con salto directo a página, selector desplegable de filas por vista y rango actual.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'pagination-matrix-bar', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
