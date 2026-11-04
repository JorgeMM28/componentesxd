/**
 * ============================================================================
 * COMPONENTESXD — 04. Architectural Key-Value Description Grid (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/badges-data/variants/key-value-spec-list/key-value-spec-list.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-key-value-spec-list',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-badges-data-key-value-spec-list" [attr.data-theme]="interfaceTheme">
      <header class="cxd-badges-data-key-value-spec-list__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-badges-data-key-value-spec-list__body">
        <p>Lista estructurada de propiedades técnicas con líneas guía punteadas y copiado rápido por valor.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdKeyValueSpecListComponent {
  @Input() title = '04. Architectural Key-Value Description Grid';
  @Input() badge = 'SPEC LIST';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('key-value-spec-list');
  }
}
