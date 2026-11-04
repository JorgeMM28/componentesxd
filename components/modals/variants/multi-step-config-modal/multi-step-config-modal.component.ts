/**
 * ============================================================================
 * COMPONENTESXD — 04. Stepped Configuration Wizard Modal (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/modals/variants/multi-step-config-modal/multi-step-config-modal.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-multi-step-config-modal',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-modals-multi-step-config-modal" [attr.data-theme]="interfaceTheme">
      <header class="cxd-modals-multi-step-config-modal__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-modals-multi-step-config-modal__body">
        <p>Ventana modal dividida en pasos con indicador de progreso superior y pie de navegación persistente.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdMultiStepConfigModalComponent {
  @Input() title = '04. Stepped Configuration Wizard Modal';
  @Input() badge = 'WIZARD MODAL';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('multi-step-config-modal');
  }
}
