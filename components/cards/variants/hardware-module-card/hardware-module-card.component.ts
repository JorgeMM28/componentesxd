/**
 * ============================================================================
 * COMPONENTESXD — 08. Teenage-Style Hardware Synth Module Card (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/cards/variants/hardware-module-card/hardware-module-card.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-hardware-module-card',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-cards-hardware-module-card" [attr.data-theme]="interfaceTheme">
      <header class="cxd-cards-hardware-module-card__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-cards-hardware-module-card__body">
        <p>Estética de módulo físico con tornillos vectoriales en las esquinas, indicadores LED y lecturas mono.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdHardwareModuleCardComponent {
  @Input() title = '08. Teenage-Style Hardware Synth Module Card';
  @Input() badge = 'INDUSTRIAL UI';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('hardware-module-card');
  }
}
