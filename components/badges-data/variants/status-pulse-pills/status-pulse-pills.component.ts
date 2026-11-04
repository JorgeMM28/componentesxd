/**
 * ============================================================================
 * COMPONENTESXD — 01. Semantic Status Badges & Live Pulse Dots (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/badges-data/variants/status-pulse-pills/status-pulse-pills.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-status-pulse-pills',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-badges-data-status-pulse-pills" [attr.data-theme]="interfaceTheme">
      <header class="cxd-badges-data-status-pulse-pills__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-badges-data-status-pulse-pills__body">
        <p>Colección de insignias semánticas (Operational, Degraded, Outage, Maintenance) con indicador luminoso.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdStatusPulsePillsComponent {
  @Input() title = '01. Semantic Status Badges & Live Pulse Dots';
  @Input() badge = 'STATUS BADGES';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('status-pulse-pills');
  }
}
