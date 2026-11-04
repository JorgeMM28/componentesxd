/**
 * ============================================================================
 * COMPONENTESXD — 06. Precision Numeric Range & Step Control (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/forms/variants/tactile-range-slider/tactile-range-slider.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-tactile-range-slider',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-forms-tactile-range-slider" [attr.data-theme]="interfaceTheme">
      <header class="cxd-forms-tactile-range-slider__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-forms-tactile-range-slider__body">
        <p>Deslizador calibrado con marcas de graduación, lectura numérica tabular en vivo y botones +/- finos.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdTactileRangeSliderComponent {
  @Input() title = '06. Precision Numeric Range & Step Control';
  @Input() badge = 'RANGE / STEPPER';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('tactile-range-slider');
  }
}
