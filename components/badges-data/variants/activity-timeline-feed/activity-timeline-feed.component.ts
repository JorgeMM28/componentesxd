/**
 * ============================================================================
 * COMPONENTESXD — 02. Vertical Deployment & Event Timeline (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/badges-data/variants/activity-timeline-feed/activity-timeline-feed.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-activity-timeline-feed',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-badges-data-activity-timeline-feed" [attr.data-theme]="interfaceTheme">
      <header class="cxd-badges-data-activity-timeline-feed__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-badges-data-activity-timeline-feed__body">
        <p>Línea de tiempo técnica con nodos vectoriales conectados, autor, timestamp relativo y metadatos.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdActivityTimelineFeedComponent {
  @Input() title = '02. Vertical Deployment & Event Timeline';
  @Input() badge = 'TIMELINE FEED';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('activity-timeline-feed');
  }
}
