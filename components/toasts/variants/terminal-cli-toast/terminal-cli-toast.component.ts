/**
 * ============================================================================
 * COMPONENTESXD — 04. CLI & Webhook Telemetry Toast (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/toasts/variants/terminal-cli-toast/terminal-cli-toast.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-terminal-cli-toast',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-toasts-terminal-cli-toast" [attr.data-theme]="interfaceTheme">
      <header class="cxd-toasts-terminal-cli-toast__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-toasts-terminal-cli-toast__body">
        <p>Notificación técnica con payload JSON resumido, código de estado HTTP y botón de copiado de trace ID.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdTerminalCliToastComponent {
  @Input() title = '04. CLI & Webhook Telemetry Toast';
  @Input() badge = 'DEV / WEBHOOK';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('terminal-cli-toast');
  }
}
