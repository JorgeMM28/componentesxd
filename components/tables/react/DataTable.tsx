/**
 * ============================================================================
 * COMPONENTESXD — DATA TABLE PRO (REACT / NEXT.JS / REMIX)
 * Archivo: components/tables/react/DataTable.tsx
 * ============================================================================
 * Copia este archivo y `components/tables/css-scss/table.css` en tu proyecto.
 */

import React, { useMemo, useState } from 'react';
import '../css-scss/table.css';

export type RowStatus = 'active' | 'pending' | 'failed';

export interface DataTableItem {
  id: string;
  name: string;
  code: string;
  role: string;
  status: RowStatus;
  load: number;
  latency: string;
}

interface DataTableProps {
  data: DataTableItem[];
  theme?: 'obsidian' | 'brutalist' | 'swiss' | 'cyber';
  onRowAction?: (item: DataTableItem) => void;
}

export const DataTable: React.FC<DataTableProps> = ({
  data,
  theme = 'obsidian',
  onRowAction
}) => {
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | RowStatus>('all');
  const [sortKey, setSortKey] = useState<'name' | 'load' | 'status'>('name');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const filteredData = useMemo(() => {
    return data
      .filter((item) => {
        const matchesQuery =
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.code.toLowerCase().includes(query.toLowerCase()) ||
          item.role.toLowerCase().includes(query.toLowerCase());
        const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
        return matchesQuery && matchesStatus;
      })
      .sort((a, b) => {
        const valA = a[sortKey];
        const valB = b[sortKey];
        const cmp =
          typeof valA === 'number' && typeof valB === 'number'
            ? valA - valB
            : String(valA).localeCompare(String(valB));
        return sortDir === 'asc' ? cmp : -cmp;
      });
  }, [data, query, statusFilter, sortKey, sortDir]);

  const toggleSort = (key: 'name' | 'load' | 'status') => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const toggleRow = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="cxd-table-shell" data-theme={theme}>
      <div className="cxd-table-toolbar">
        <div className="cxd-table-search">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filtrar nodos, ID o servicio..."
          />
        </div>

        <div className="cxd-table-filter-group">
          {(['all', 'active', 'pending', 'failed'] as const).map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setStatusFilter(status)}
              className={`cxd-table-filter-btn ${statusFilter === status ? 'is-active' : ''}`}
            >
              {status === 'all' ? 'Todos' : status.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="cxd-table-scroll">
        <table className="cxd-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={filteredData.length > 0 && selectedIds.size === filteredData.length}
                  onChange={(e) =>
                    setSelectedIds(
                      e.target.checked ? new Set(filteredData.map((d) => d.id)) : new Set()
                    )
                  }
                />
              </th>
              <th className="is-sortable" onClick={() => toggleSort('name')}>
                Nodo / Servicio {sortKey === 'name' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th>Cluster Rol</th>
              <th className="is-sortable" onClick={() => toggleSort('status')}>
                Estado {sortKey === 'status' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th className="is-sortable" onClick={() => toggleSort('load')}>
                Carga CPU {sortKey === 'load' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th>Latencia</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => {
              const isSelected = selectedIds.has(row.id);
              return (
                <tr key={row.id} className={isSelected ? 'is-selected' : ''}>
                  <td>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleRow(row.id)}
                    />
                  </td>
                  <td>
                    <div className="cxd-entity-cell">
                      <div className="cxd-entity-avatar">{row.name.slice(0, 2).toUpperCase()}</div>
                      <div className="cxd-entity-meta">
                        <span className="cxd-entity-name">{row.name}</span>
                        <span className="cxd-entity-sub">{row.code}</span>
                      </div>
                    </div>
                  </td>
                  <td>{row.role}</td>
                  <td>
                    <span className={`cxd-badge cxd-badge--${row.status}`}>
                      <span className="cxd-badge-dot" />
                      {row.status}
                    </span>
                  </td>
                  <td>
                    <div className="cxd-telemetry-cell">
                      <div className="cxd-telemetry-bar">
                        <div className="cxd-telemetry-fill" style={{ width: `${row.load}%` }} />
                      </div>
                      <span className="cxd-telemetry-val">{row.load}%</span>
                    </div>
                  </td>
                  <td style={{ fontFamily: 'var(--cxd-font-mono)' }}>{row.latency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="cxd-table-footer">
        <span>
          {filteredData.length} de {data.length} registros · {selectedIds.size} seleccionados
        </span>
      </div>
    </div>
  );
};

