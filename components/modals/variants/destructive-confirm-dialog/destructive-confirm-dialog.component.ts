/**
 * ============================================================================
 * COMPONENTESXD — 03. Critical Action Verification Modal (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/modals/variants/destructive-confirm-dialog/destructive-confirm-dialog.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-destructive-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-modals-destructive-confirm-dialog" [attr.data-theme]="interfaceTheme">
      <header class="cxd-modals-destructive-confirm-dialog__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-modals-destructive-confirm-dialog__body">
        <p>Diálogo de seguridad que solicita escribir el nombre del recurso antes de habilitar el botón de borrado.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdDestructiveConfirmDialogComponent {
  @Input() title = '03. Critical Action Verification Modal';
  @Input() badge = 'SAFETY DIALOG';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('destructive-confirm-dialog');
  }
}
