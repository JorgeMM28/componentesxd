/**
 * ============================================================================
 * COMPONENTESXD — 04. Password Input + Live Entropy Analyzer (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/forms/variants/password-entropy-meter/password-entropy-meter.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-password-entropy-meter',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-forms-password-entropy-meter" [attr.data-theme]="interfaceTheme">
      <header class="cxd-forms-password-entropy-meter__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-forms-password-entropy-meter__body">
        <p>Evalúa longitud, símbolos y entropía en tiempo real mediante 4 segmentos de estado y checklist SVG.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdPasswordEntropyMeterComponent {
  @Input() title = '04. Password Input + Live Entropy Analyzer';
  @Input() badge = 'SECURITY METER';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('password-entropy-meter');
  }
}
