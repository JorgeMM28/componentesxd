/**
 * ============================================================================
 * COMPONENTESXD — COMMAND PALETTE (REACT)
 * Archivo: components/modals/react/CommandPalette.tsx
 * ============================================================================
 */
import React, { useState } from 'react';
import '../css-scss/modals.css';

export interface CommandItem {
  id: string;
  label: string;
  shortcut: string;
  category: string;
}

export const CommandPalette: React.FC<{
  items: CommandItem[];
  onSelect?: (item: CommandItem) => void;
}> = ({ items, onSelect }) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="cxd-cmd-palette" role="dialog" aria-label="Command Palette">
      <div className="cxd-cmd-header">
        <input
          className="cxd-cmd-input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(0);
          }}
          placeholder="Escribe un comando o busca una acción..."
        />
        <kbd className="cxd-cmd-kbd">ESC</kbd>
      </div>
      <div className="cxd-cmd-list">
        {filtered.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => onSelect?.(item)}
            onMouseEnter={() => setActiveIndex(idx)}
            className={`cxd-cmd-item ${idx === activeIndex ? 'is-active' : ''}`}
          >
            <span>{item.label}</span>
            <kbd className="cxd-cmd-kbd">{item.shortcut}</kbd>
          </div>
        ))}
      </div>
    </div>
  );
};

