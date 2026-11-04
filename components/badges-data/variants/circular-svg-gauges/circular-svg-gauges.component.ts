/**
 * ============================================================================
 * COMPONENTESXD — 03. Radial SVG Telemetry Gauges (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/badges-data/variants/circular-svg-gauges/circular-svg-gauges.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-circular-svg-gauges',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-badges-data-circular-svg-gauges" [attr.data-theme]="interfaceTheme">
      <header class="cxd-badges-data-circular-svg-gauges__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-badges-data-circular-svg-gauges__body">
        <p>Medidores circulares y semicirculares en SVG puro para CPU, Memoria, Disco y SLA.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdCircularSvgGaugesComponent {
  @Input() title = '03. Radial SVG Telemetry Gauges';
  @Input() badge = 'SVG GAUGES';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('circular-svg-gauges');
  }
}
