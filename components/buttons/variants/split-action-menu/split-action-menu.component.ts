/**
 * ============================================================================
 * COMPONENTESXD — 05. Split Primary + Context Dropdown Button (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/buttons/variants/split-action-menu/split-action-menu.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-split-action-menu',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-buttons-split-action-menu" [attr.data-theme]="interfaceTheme">
      <header class="cxd-buttons-split-action-menu__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-buttons-split-action-menu__body">
        <p>Combina la ejecución principal inmediata con un selector desplegable de opciones secundarias (Deploy / Dry-run).</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdSplitActionMenuComponent {
  @Input() title = '05. Split Primary + Context Dropdown Button';
  @Input() badge = 'SPLIT ACTION';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('split-action-menu');
  }
}
