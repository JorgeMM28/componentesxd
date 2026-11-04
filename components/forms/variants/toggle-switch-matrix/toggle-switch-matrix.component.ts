/**
 * ============================================================================
 * COMPONENTESXD — 08. Industrial Toggle Switch & Radio Cards (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/forms/variants/toggle-switch-matrix/toggle-switch-matrix.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-toggle-switch-matrix',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-forms-toggle-switch-matrix" [attr.data-theme]="interfaceTheme">
      <header class="cxd-forms-toggle-switch-matrix__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-forms-toggle-switch-matrix__body">
        <p>Interruptores binarios de baja latencia y tarjetas de selección exclusiva con indicador activo.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdToggleSwitchMatrixComponent {
  @Input() title = '08. Industrial Toggle Switch & Radio Cards';
  @Input() badge = 'SWITCHES';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('toggle-switch-matrix');
  }
}
