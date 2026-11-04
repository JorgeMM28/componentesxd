/**
 * ============================================================================
 * COMPONENTESXD — 03. Actionable Undo Toast + Progress Timer (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/toasts/variants/action-undo-countdown/action-undo-countdown.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-action-undo-countdown',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-toasts-action-undo-countdown" [attr.data-theme]="interfaceTheme">
      <header class="cxd-toasts-action-undo-countdown__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-toasts-action-undo-countdown__body">
        <p>Toaster con botón de acción ("Deshacer borrado") y barra inferior de cuenta regresiva sincronizada.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdActionUndoCountdownComponent {
  @Input() title = '03. Actionable Undo Toast + Progress Timer';
  @Input() badge = 'UNDO / TIMER';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('action-undo-countdown');
  }
}
