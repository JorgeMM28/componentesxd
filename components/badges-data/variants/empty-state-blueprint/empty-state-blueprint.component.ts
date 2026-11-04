/**
 * ============================================================================
 * COMPONENTESXD — 06. Technical Wireframe Empty State (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/badges-data/variants/empty-state-blueprint/empty-state-blueprint.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-empty-state-blueprint',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-badges-data-empty-state-blueprint" [attr.data-theme]="interfaceTheme">
      <header class="cxd-badges-data-empty-state-blueprint__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-badges-data-empty-state-blueprint__body">
        <p>Estado vacío con ilustración geométrica en SVG, explicación clara y acción rápida de creación.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdEmptyStateBlueprintComponent {
  @Input() title = '06. Technical Wireframe Empty State';
  @Input() badge = 'EMPTY STATE';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('empty-state-blueprint');
  }
}
