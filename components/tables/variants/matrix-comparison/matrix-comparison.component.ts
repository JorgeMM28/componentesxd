/**
 * ============================================================================
 * COMPONENTESXD — 04. Sticky Spec & Feature Comparison Matrix (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/tables/variants/matrix-comparison/matrix-comparison.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-matrix-comparison',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-tables-matrix-comparison" [attr.data-theme]="interfaceTheme">
      <header class="cxd-tables-matrix-comparison__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-tables-matrix-comparison__body">
        <p>Tabla comparativa con primera columna fija, indicadores vectoriales SVG de soporte, límites técnicos y cabeceras congeladas.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdMatrixComparisonComponent {
  @Input() title = '04. Sticky Spec & Feature Comparison Matrix';
  @Input() badge = 'SPEC MATRIX';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('matrix-comparison');
  }
}
