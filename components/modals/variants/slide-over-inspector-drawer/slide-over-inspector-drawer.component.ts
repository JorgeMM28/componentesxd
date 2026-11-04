/**
 * ============================================================================
 * COMPONENTESXD — 02. Slide-Over Telemetry Inspector Drawer (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/modals/variants/slide-over-inspector-drawer/slide-over-inspector-drawer.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-slide-over-inspector-drawer',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-modals-slide-over-inspector-drawer" [attr.data-theme]="interfaceTheme">
      <header class="cxd-modals-slide-over-inspector-drawer__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-modals-slide-over-inspector-drawer__body">
        <p>Panel lateral deslizable para inspeccionar metadatos de una fila, logs o configuración sin perder contexto.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdSlideOverInspectorDrawerComponent {
  @Input() title = '02. Slide-Over Telemetry Inspector Drawer';
  @Input() badge = 'SIDE DRAWER';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('slide-over-inspector-drawer');
  }
}
