/**
 * ============================================================================
 * COMPONENTESXD — 01. Enterprise Financial Ledger Grid (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/tables/variants/enterprise-ledger/enterprise-ledger.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-enterprise-ledger',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-tables-enterprise-ledger" [attr.data-theme]="interfaceTheme">
      <header class="cxd-tables-enterprise-ledger__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-tables-enterprise-ledger__body">
        <p>Tabla contable e institucional con búsqueda instantánea, filtros de estado, barras de carga CPU, selección por lote y totales tabulares.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdEnterpriseLedgerComponent {
  @Input() title = '01. Enterprise Financial Ledger Grid';
  @Input() badge = 'FINTECH / LEDGER';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('enterprise-ledger');
  }
}
