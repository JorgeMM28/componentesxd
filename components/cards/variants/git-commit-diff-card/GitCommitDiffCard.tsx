/**
 * ============================================================================
 * COMPONENTESXD — 04. Git Commit & Code Diff Inspection Card (REACT / NEXT.JS)
 * Archivo: components/cards/variants/git-commit-diff-card/GitCommitDiffCard.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import './styles.css';

export interface GitCommitDiffCardProps {
  title?: string;
  badge?: string;
  interfaceTheme?: string;
  data?: Array<Record<string, any>>;
  onAction?: (payload: any) => void;
}

export const GitCommitDiffCard: React.FC<GitCommitDiffCardProps> = ({
  title = '04. Git Commit & Code Diff Inspection Card',
  badge = 'VERSION CONTROL',
  interfaceTheme,
  data = [],
  onAction
}) => {
  const [activeState, setActiveState] = useState<string>('ready');

  return (
    <section
      className="cxd-cards-git-commit-diff-card"
      data-theme={interfaceTheme}
      data-variant="git-commit-diff-card"
    >
      <header className="cxd-cards-git-commit-diff-card__header">
        <span>{title}</span>
        <span className="cxd-badge">{badge}</span>
      </header>
      <div className="cxd-cards-git-commit-diff-card__body">
        <p>Superficie para visualizar hash de commit, rama, líneas añadidas/eliminadas y bloque diff coloreado.</p>
        <button
          type="button"
          className="cxd-btn"
          onClick={() => {
            setActiveState('executed');
            onAction?.({ variant: 'git-commit-diff-card', status: activeState });
          }}
        >
          Ejecutar Acción ({activeState})
        </button>
      </div>
    </section>
  );
};
