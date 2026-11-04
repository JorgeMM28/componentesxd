/**
 * ============================================================================
 * COMPONENTESXD — 06. Full Pagination + Page Size Selector Bar (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/navigation/variants/pagination-matrix-bar/pagination-matrix-bar.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-pagination-matrix-bar',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-navigation-pagination-matrix-bar" [attr.data-theme]="interfaceTheme">
      <header class="cxd-navigation-pagination-matrix-bar__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-navigation-pagination-matrix-bar__body">
        <p>Control de paginación con salto directo a página, selector desplegable de filas por vista y rango actual.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdPaginationMatrixBarComponent {
  @Input() title = '06. Full Pagination + Page Size Selector Bar';
  @Input() badge = 'PAGINATION';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('pagination-matrix-bar');
  }
}
