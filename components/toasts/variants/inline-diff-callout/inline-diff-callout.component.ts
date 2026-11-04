/**
 * ============================================================================
 * COMPONENTESXD — 06. Architectural Callout & Warning Block (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/toasts/variants/inline-diff-callout/inline-diff-callout.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-inline-diff-callout',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-toasts-inline-diff-callout" [attr.data-theme]="interfaceTheme">
      <header class="cxd-toasts-inline-diff-callout__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-toasts-inline-diff-callout__body">
        <p>Bloque de alerta embebido con borde lateral de precisión, icono SVG técnico y acciones correctivas.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdInlineDiffCalloutComponent {
  @Input() title = '06. Architectural Callout & Warning Block';
  @Input() badge = 'CALLOUT BOX';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('inline-diff-callout');
  }
}
