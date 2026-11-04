/**
 * ============================================================================
 * COMPONENTESXD — 06. Tactical KBD Shortcut Command Button (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/buttons/variants/kbd-shortcut-trigger/kbd-shortcut-trigger.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-kbd-shortcut-trigger',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-buttons-kbd-shortcut-trigger" [attr.data-theme]="interfaceTheme">
      <header class="cxd-buttons-kbd-shortcut-trigger__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-buttons-kbd-shortcut-trigger__body">
        <p>Incluye insignia física de atajo de teclado (Cmd+Enter) y responde tanto a clic como a evento keydown.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdKbdShortcutTriggerComponent {
  @Input() title = '06. Tactical KBD Shortcut Command Button';
  @Input() badge = 'HOTKEY READY';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('kbd-shortcut-trigger');
  }
}
