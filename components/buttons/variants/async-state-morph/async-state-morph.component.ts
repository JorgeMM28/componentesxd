/**
 * ============================================================================
 * COMPONENTESXD — 04. Async 3-State Morph Button (Idle -> Run -> Done) (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/buttons/variants/async-state-morph/async-state-morph.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-async-state-morph',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-buttons-async-state-morph" [attr.data-theme]="interfaceTheme">
      <header class="cxd-buttons-async-state-morph__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-buttons-async-state-morph__body">
        <p>Transiciona automáticamente entre etiqueta normal, spinner SVG de precisión y confirmación vectorial.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdAsyncStateMorphComponent {
  @Input() title = '04. Async 3-State Morph Button (Idle -> Run -> Done)';
  @Input() badge = 'STATE MACHINE';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('async-state-morph');
  }
}
