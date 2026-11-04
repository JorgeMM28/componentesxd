/**
 * ============================================================================
 * COMPONENTESXD — 01. Cursor-Tracking Radial Spotlight Card (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/cards/variants/spotlight-radial-bento/spotlight-radial-bento.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-spotlight-radial-bento',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-cards-spotlight-radial-bento" [attr.data-theme]="interfaceTheme">
      <header class="cxd-cards-spotlight-radial-bento__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-cards-spotlight-radial-bento__body">
        <p>Proyecta iluminación radial siguiendo las coordenadas X/Y del puntero sobre el chasis y el borde.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdSpotlightRadialBentoComponent {
  @Input() title = '01. Cursor-Tracking Radial Spotlight Card';
  @Input() badge = 'RADIAL LIGHT';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('spotlight-radial-bento');
  }
}
