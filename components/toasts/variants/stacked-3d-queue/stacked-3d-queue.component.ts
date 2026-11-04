/**
 * ============================================================================
 * COMPONENTESXD — 02. 3D Perspective Stacked Toast Queue (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/toasts/variants/stacked-3d-queue/stacked-3d-queue.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-stacked-3d-queue',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-toasts-stacked-3d-queue" [attr.data-theme]="interfaceTheme">
      <header class="cxd-toasts-stacked-3d-queue__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-toasts-stacked-3d-queue__body">
        <p>Cola de notificaciones apiladas en profundidad 3D que se despliegan en abanico al pasar el cursor.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdStacked3dQueueComponent {
  @Input() title = '02. 3D Perspective Stacked Toast Queue';
  @Input() badge = 'STACKED QUEUE';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('stacked-3d-queue');
  }
}
