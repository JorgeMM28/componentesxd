/**
 * ============================================================================
 * COMPONENTESXD — 07. Keyboard Shortcut Chord Display (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/badges-data/variants/keyboard-shortcut-matrix/keyboard-shortcut-matrix.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-keyboard-shortcut-matrix',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-badges-data-keyboard-shortcut-matrix" [attr.data-theme]="interfaceTheme">
      <header class="cxd-badges-data-keyboard-shortcut-matrix__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-badges-data-keyboard-shortcut-matrix__body">
        <p>Representación visual de combinaciones de teclas (Ctrl + Shift + P) con relieve táctil.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdKeyboardShortcutMatrixComponent {
  @Input() title = '07. Keyboard Shortcut Chord Display';
  @Input() badge = 'KBD CHORDS';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('keyboard-shortcut-matrix');
  }
}
