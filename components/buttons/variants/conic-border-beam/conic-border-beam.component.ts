/**
 * ============================================================================
 * COMPONENTESXD — 02. Conic Border Beam Button (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/buttons/variants/conic-border-beam/conic-border-beam.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-conic-border-beam',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-buttons-conic-border-beam" [attr.data-theme]="interfaceTheme">
      <header class="cxd-buttons-conic-border-beam__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-buttons-conic-border-beam__body">
        <p>Haz de luz perimetral continuo renderizado por GPU mediante @property sin elementos DOM extra.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdConicBorderBeamComponent {
  @Input() title = '02. Conic Border Beam Button';
  @Input() badge = 'CSS @PROPERTY';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('conic-border-beam');
  }
}
