/**
 * ============================================================================
 * COMPONENTESXD — 04. Precision Tab Bar with Sliding Hairline (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/navigation/variants/sliding-indicator-tabs/sliding-indicator-tabs.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-sliding-indicator-tabs',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-navigation-sliding-indicator-tabs" [attr.data-theme]="interfaceTheme">
      <header class="cxd-navigation-sliding-indicator-tabs__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-navigation-sliding-indicator-tabs__body">
        <p>Pestañas horizontales con línea inferior activa que se desliza suavemente hacia la pestaña seleccionada.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdSlidingIndicatorTabsComponent {
  @Input() title = '04. Precision Tab Bar with Sliding Hairline';
  @Input() badge = 'TABS BAR';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('sliding-indicator-tabs');
  }
}
