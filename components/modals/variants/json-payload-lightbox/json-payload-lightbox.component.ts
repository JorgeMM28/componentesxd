/**
 * ============================================================================
 * COMPONENTESXD — 06. Raw JSON / Schema Diff Modal Inspector (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/modals/variants/json-payload-lightbox/json-payload-lightbox.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-json-payload-lightbox',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-modals-json-payload-lightbox" [attr.data-theme]="interfaceTheme">
      <header class="cxd-modals-json-payload-lightbox__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-modals-json-payload-lightbox__body">
        <p>Visor modal con numeración de líneas, plegado de nodos y copiado directo de estructuras JSON.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdJsonPayloadLightboxComponent {
  @Input() title = '06. Raw JSON / Schema Diff Modal Inspector';
  @Input() badge = 'PAYLOAD VIEWER';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('json-payload-lightbox');
  }
}
