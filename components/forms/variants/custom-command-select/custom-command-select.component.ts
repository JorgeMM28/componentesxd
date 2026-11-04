/**
 * ============================================================================
 * COMPONENTESXD — 03. Searchable Multi-Option Dropdown Select (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/forms/variants/custom-command-select/custom-command-select.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-custom-command-select',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-forms-custom-command-select" [attr.data-theme]="interfaceTheme">
      <header class="cxd-forms-custom-command-select__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-forms-custom-command-select__body">
        <p>Lista desplegable organizada con categorías, prefijos técnicos y selección instantánea sin desorden visual.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdCustomCommandSelectComponent {
  @Input() title = '03. Searchable Multi-Option Dropdown Select';
  @Input() badge = 'CUSTOM SELECT';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('custom-command-select');
  }
}
