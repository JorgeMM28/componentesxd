/**
 * ============================================================================
 * COMPONENTESXD — 01. Dynamic Island Morphing Capsule (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/toasts/variants/dynamic-island-capsule/dynamic-island-capsule.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-dynamic-island-capsule',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-toasts-dynamic-island-capsule" [attr.data-theme]="interfaceTheme">
      <header class="cxd-toasts-dynamic-island-capsule__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-toasts-dynamic-island-capsule__body">
        <p>Cápsula superior que se expande suavemente entre estado reposo, procesamiento con onda de actividad y confirmación.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdDynamicIslandCapsuleComponent {
  @Input() title = '01. Dynamic Island Morphing Capsule';
  @Input() badge = 'MORPHING CAPSULE';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('dynamic-island-capsule');
  }
}
