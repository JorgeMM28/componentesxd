/**
 * ============================================================================
 * COMPONENTESXD — DATA TABLE PRO (ANGULAR 18+ STANDALONE + SIGNALS)
 * Archivo: components/tables/angular/data-table.component.ts
 * ============================================================================
 */
import { Component, Input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TableRow {
  id: string;
  name: string;
  code: string;
  role: string;
  status: 'active' | 'pending' | 'failed';
  load: number;
  latency: string;
}

@Component({
  selector: 'cxd-data-table',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['../css-scss/table.css'],
  template: `
    <div class="cxd-table-shell" [attr.data-theme]="theme">
      <div class="cxd-table-toolbar">
        <div class="cxd-table-search">
          <input
            type="search"
            [value]="query()"
            (input)="query.set($any($event.target).value)"
            placeholder="Filtrar nodos o servicio..."
          />
        </div>
        <div class="cxd-table-filter-group">
          @for (st of statuses; track st) {
            <button
              type="button"
              class="cxd-table-filter-btn"
              [class.is-active]="statusFilter() === st"
              (click)="statusFilter.set(st)"
            >
              {{ st === 'all' ? 'Todos' : st.toUpperCase() }}
            </button>
          }
        </div>
      </div>

      <div class="cxd-table-scroll">
        <table class="cxd-table">
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Carga CPU</th>
              <th>Latencia</th>
            </tr>
          </thead>
          <tbody>
            @for (row of filteredRows(); track row.id) {
              <tr>
                <td>
                  <div class="cxd-entity-cell">
                    <div class="cxd-entity-avatar">{{ row.name.slice(0, 2).toUpperCase() }}</div>
                    <div class="cxd-entity-meta">
                      <span class="cxd-entity-name">{{ row.name }}</span>
                      <span class="cxd-entity-sub">{{ row.code }}</span>
                    </div>
                  </div>
                </td>
                <td>{{ row.role }}</td>
                <td>
                  <span class="cxd-badge cxd-badge--{{ row.status }}">
                    <span class="cxd-badge-dot"></span>
                    {{ row.status }}
                  </span>
                </td>
                <td>
                  <div class="cxd-telemetry-cell">
                    <div class="cxd-telemetry-bar">
                      <div class="cxd-telemetry-fill" [style.width.%]="row.load"></div>
                    </div>
                    <span class="cxd-telemetry-val">{{ row.load }}%</span>
                  </div>
                </td>
                <td>{{ row.latency }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class CxdDataTableComponent {
  @Input() rows: TableRow[] = [];
  @Input() theme: 'obsidian' | 'brutalist' | 'swiss' | 'cyber' = 'obsidian';

  readonly statuses = ['all', 'active', 'pending', 'failed'] as const;
  query = signal('');
  statusFilter = signal<'all' | 'active' | 'pending' | 'failed'>('all');

  filteredRows = computed(() => {
    const q = this.query().toLowerCase();
    const sf = this.statusFilter();
    return this.rows.filter((r) => {
      const matchQ = !q || r.name.toLowerCase().includes(q) || r.code.toLowerCase().includes(q);
      const matchS = sf === 'all' || r.status === sf;
      return matchQ && matchS;
    });
  });
}

