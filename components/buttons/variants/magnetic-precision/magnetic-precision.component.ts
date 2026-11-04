/**
 * ============================================================================
 * COMPONENTESXD — 01. Magnetic Cursor-Tracking Button (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/buttons/variants/magnetic-precision/magnetic-precision.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-magnetic-precision',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-buttons-magnetic-precision" [attr.data-theme]="interfaceTheme">
      <header class="cxd-buttons-magnetic-precision__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-buttons-magnetic-precision__body">
        <p>Calcula el centro geométrico y aplica traslación proporcional al cursor con retorno elástico.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdMagneticPrecisionComponent {
  @Input() title = '01. Magnetic Cursor-Tracking Button';
  @Input() badge = 'MAGNETIC';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('magnetic-precision');
  }
}
