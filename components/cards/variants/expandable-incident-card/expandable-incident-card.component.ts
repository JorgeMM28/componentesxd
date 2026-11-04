/**
 * ============================================================================
 * COMPONENTESXD — 06. Expandable Postmortem & Diagnostics Card (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/cards/variants/expandable-incident-card/expandable-incident-card.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-expandable-incident-card',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-cards-expandable-incident-card" [attr.data-theme]="interfaceTheme">
      <header class="cxd-cards-expandable-incident-card__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-cards-expandable-incident-card__body">
        <p>Resumen compacto que despliega detalles técnicos de diagnóstico, nodos afectados y cronología.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdExpandableIncidentCardComponent {
  @Input() title = '06. Expandable Postmortem & Diagnostics Card';
  @Input() badge = 'ACCORDION CARD';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('expandable-incident-card');
  }
}
