/**
 * ============================================================================
 * COMPONENTESXD — 08. Mechanical Hard-Offset Push Button (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/buttons/variants/industrial-offset-trigger/industrial-offset-trigger.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-industrial-offset-trigger',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-buttons-industrial-offset-trigger" [attr.data-theme]="interfaceTheme">
      <header class="cxd-buttons-industrial-offset-trigger__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-buttons-industrial-offset-trigger__body">
        <p>Recorrido físico vertical al presionar con sombra sólida que colapsa en el estado :active.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdIndustrialOffsetTriggerComponent {
  @Input() title = '08. Mechanical Hard-Offset Push Button';
  @Input() badge = 'TACTILE PUSH';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('industrial-offset-trigger');
  }
}
