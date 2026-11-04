/**
 * ============================================================================
 * COMPONENTESXD — 05. Scoped Filter & Query Input Bar (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/forms/variants/scoped-query-bar/scoped-query-bar.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-scoped-query-bar',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-forms-scoped-query-bar" [attr.data-theme]="interfaceTheme">
      <header class="cxd-forms-scoped-query-bar__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-forms-scoped-query-bar__body">
        <p>Barra de entrada con selector de ámbito (env:prod, region:us-east) integrado a la izquierda y botón limpiar.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdScopedQueryBarComponent {
  @Input() title = '05. Scoped Filter & Query Input Bar';
  @Input() badge = 'QUERY BUILDER';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('scoped-query-bar');
  }
}
