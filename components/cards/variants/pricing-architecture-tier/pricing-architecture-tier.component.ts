/**
 * ============================================================================
 * COMPONENTESXD — 05. Architectural Pricing & Quota Tier Card (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/cards/variants/pricing-architecture-tier/pricing-architecture-tier.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-pricing-architecture-tier',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-cards-pricing-architecture-tier" [attr.data-theme]="interfaceTheme">
      <header class="cxd-cards-pricing-architecture-tier__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-cards-pricing-architecture-tier__body">
        <p>Desglose técnico de plan con medidor de cuota consumida, lista verificada con SVGs y CTA integrado.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdPricingArchitectureTierComponent {
  @Input() title = '05. Architectural Pricing & Quota Tier Card';
  @Input() badge = 'BILLING TIER';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('pricing-architecture-tier');
  }
}
