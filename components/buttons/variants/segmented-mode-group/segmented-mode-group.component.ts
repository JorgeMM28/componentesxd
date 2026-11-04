/**
 * ============================================================================
 * COMPONENTESXD — 07. Segmented Action Bar with Active Pill (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/buttons/variants/segmented-mode-group/segmented-mode-group.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-segmented-mode-group',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-buttons-segmented-mode-group" [attr.data-theme]="interfaceTheme">
      <header class="cxd-buttons-segmented-mode-group__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-buttons-segmented-mode-group__body">
        <p>Barra de herramientas unificada por bordes de 1px para alternar vistas (Tabla / Tarjetas / Grafo / JSON).</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdSegmentedModeGroupComponent {
  @Input() title = '07. Segmented Action Bar with Active Pill';
  @Input() badge = 'BUTTON GROUP';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('segmented-mode-group');
  }
}
