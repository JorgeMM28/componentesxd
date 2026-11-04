/**
 * ============================================================================
 * COMPONENTESXD — 05. Anchored Context Menu & Quick Popover (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/modals/variants/anchored-context-popover/anchored-context-popover.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-anchored-context-popover',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-modals-anchored-context-popover" [attr.data-theme]="interfaceTheme">
      <header class="cxd-modals-anchored-context-popover__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-modals-anchored-context-popover__body">
        <p>Menú flotante compacto con separadores de 1px, iconos vectoriales alineados y sub-acciones.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdAnchoredContextPopoverComponent {
  @Input() title = '05. Anchored Context Menu & Quick Popover';
  @Input() badge = 'CONTEXT MENU';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('anchored-context-popover');
  }
}
