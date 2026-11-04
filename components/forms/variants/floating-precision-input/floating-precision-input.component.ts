/**
 * ============================================================================
 * COMPONENTESXD — 01. Architectural Floating-Label Input (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/forms/variants/floating-precision-input/floating-precision-input.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-floating-precision-input',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-forms-floating-precision-input" [attr.data-theme]="interfaceTheme">
      <header class="cxd-forms-floating-precision-input__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-forms-floating-precision-input__body">
        <p>Etiqueta que asciende con transición cúbica al enfocar o contener valor, con indicador de validación.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdFloatingPrecisionInputComponent {
  @Input() title = '01. Architectural Floating-Label Input';
  @Input() badge = 'FLOATING LABEL';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('floating-precision-input');
  }
}
