/**
 * ============================================================================
 * COMPONENTESXD — 05. Inline Editable Data Sheet (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/tables/variants/inline-editable-sheet/inline-editable-sheet.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-inline-editable-sheet',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-tables-inline-editable-sheet" [attr.data-theme]="interfaceTheme">
      <header class="cxd-tables-inline-editable-sheet__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-tables-inline-editable-sheet__body">
        <p>Celdas editables directamente al hacer clic con resaltado de celda activa, validación instantánea y navegación por teclado.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdInlineEditableSheetComponent {
  @Input() title = '05. Inline Editable Data Sheet';
  @Input() badge = 'SPREADSHEET UI';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('inline-editable-sheet');
  }
}
