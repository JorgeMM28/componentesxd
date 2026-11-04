/**
 * ============================================================================
 * COMPONENTESXD — SPOTLIGHT BENTO CARD (REACT)
 * Archivo: components/cards/react/SpotlightCard.tsx
 * ============================================================================
 */
import React, { useRef } from 'react';
import '../css-scss/cards.css';

export interface SpotlightCardProps {
  tag: string;
  title: string;
  metric: string;
  delta?: string;
  description: string;
  theme?: 'obsidian' | 'brutalist' | 'swiss' | 'cyber';
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  tag,
  title,
  metric,
  delta = '+18.4%',
  description,
  theme = 'obsidian'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="cxd-spotlight-card"
      data-theme={theme}
    >
      <div className="cxd-card-header">
        <span className="cxd-card-tag">{tag}</span>
        <span className="cxd-card-delta">{delta}</span>
      </div>
      <h4>{title}</h4>
      <div className="cxd-card-metric">{metric}</div>
      <p className="cxd-card-desc">{description}</p>
    </article>
  );
};

