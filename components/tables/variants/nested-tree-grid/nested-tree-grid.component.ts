/**
 * ============================================================================
 * COMPONENTESXD — 02. Hierarchical Tree & Sub-Row Table (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/tables/variants/nested-tree-grid/nested-tree-grid.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-nested-tree-grid',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-tables-nested-tree-grid" [attr.data-theme]="interfaceTheme">
      <header class="cxd-tables-nested-tree-grid__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-tables-nested-tree-grid__body">
        <p>Tabla jerárquica con filas padre/hijo desplegables para desglose de clusters, microservicios, carpetas o centros de costos.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdNestedTreeGridComponent {
  @Input() title = '02. Hierarchical Tree & Sub-Row Table';
  @Input() badge = 'TREE / EXPANDABLE';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('nested-tree-grid');
  }
}
