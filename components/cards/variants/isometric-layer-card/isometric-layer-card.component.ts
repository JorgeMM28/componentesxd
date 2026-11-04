/**
 * ============================================================================
 * COMPONENTESXD — 07. 3D Isometric Perspective Hover Card (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/cards/variants/isometric-layer-card/isometric-layer-card.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-isometric-layer-card',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-cards-isometric-layer-card" [attr.data-theme]="interfaceTheme">
      <header class="cxd-cards-isometric-layer-card__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-cards-isometric-layer-card__body">
        <p>Calcula ángulos de rotación X/Y según posición del cursor con capas internas en paralaje.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdIsometricLayerCardComponent {
  @Input() title = '07. 3D Isometric Perspective Hover Card';
  @Input() badge = '3D TILT';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('isometric-layer-card');
  }
}
