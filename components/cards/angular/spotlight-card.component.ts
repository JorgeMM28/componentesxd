/**
 * ============================================================================
 * COMPONENTESXD — SPOTLIGHT BENTO CARD (ANGULAR STANDALONE)
 * Archivo: components/cards/angular/spotlight-card.component.ts
 * ============================================================================
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cxd-spotlight-card',
  standalone: true,
  styleUrls: ['../css-scss/cards.css'],
  template: `
    <article class="cxd-spotlight-card" (mousemove)="onMove($event)">
      <div class="cxd-card-header">
        <span class="cxd-card-tag">{{ tag }}</span>
        <span class="cxd-card-delta">{{ delta }}</span>
      </div>
      <h4>{{ title }}</h4>
      <div class="cxd-card-metric">{{ metric }}</div>
      <p class="cxd-card-desc">{{ description }}</p>
    </article>
  `
})
export class CxdSpotlightCardComponent {
  @Input() tag = 'TELEMETRY';
  @Input() title = 'Throughput Global';
  @Input() metric = '99.98%';
  @Input() delta = '+12.4%';
  @Input() description = '';

  onMove(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  }
}

