/**
 * ============================================================================
 * COMPONENTESXD — 05. Full-Width Incident & Maintenance Strip (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/toasts/variants/system-banner-strip/system-banner-strip.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-system-banner-strip',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-toasts-system-banner-strip" [attr.data-theme]="interfaceTheme">
      <header class="cxd-toasts-system-banner-strip__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-toasts-system-banner-strip__body">
        <p>Barra estructural superior para anuncios de mantenimiento, degradación de SLA o nuevas versiones.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdSystemBannerStripComponent {
  @Input() title = '05. Full-Width Incident & Maintenance Strip';
  @Input() badge = 'STATUS BAR';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('system-banner-strip');
  }
}
