/**
 * ============================================================================
 * COMPONENTESXD — 03. Destructive Hold-to-Confirm Button (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/buttons/variants/hold-to-confirm/hold-to-confirm.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-hold-to-confirm',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-buttons-hold-to-confirm" [attr.data-theme]="interfaceTheme">
      <header class="cxd-buttons-hold-to-confirm__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-buttons-hold-to-confirm__body">
        <p>Previene clics accidentales en acciones críticas exigiendo mantener presionado 1.2s mientras se llena la barra.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdHoldToConfirmComponent {
  @Input() title = '03. Destructive Hold-to-Confirm Button';
  @Input() badge = 'SAFETY LOCK';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('hold-to-confirm');
  }
}
