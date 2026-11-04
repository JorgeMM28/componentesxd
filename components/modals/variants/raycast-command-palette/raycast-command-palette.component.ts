/**
 * ============================================================================
 * COMPONENTESXD — 01. Command Palette (Cmd+K) Action Center (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/modals/variants/raycast-command-palette/raycast-command-palette.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-raycast-command-palette',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-modals-raycast-command-palette" [attr.data-theme]="interfaceTheme">
      <header class="cxd-modals-raycast-command-palette__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-modals-raycast-command-palette__body">
        <p>Buscador universal de comandos con filtrado instantáneo, navegación por flechas y atajos de teclado.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdRaycastCommandPaletteComponent {
  @Input() title = '01. Command Palette (Cmd+K) Action Center';
  @Input() badge = 'CMD+K PALETTE';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('raycast-command-palette');
  }
}
