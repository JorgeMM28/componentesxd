/**
 * ============================================================================
 * COMPONENTESXD — 03. Floating Bottom Command Dock (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/navigation/variants/floating-command-dock/floating-command-dock.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-floating-command-dock',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-navigation-floating-command-dock" [attr.data-theme]="interfaceTheme">
      <header class="cxd-navigation-floating-command-dock__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-navigation-floating-command-dock__body">
        <p>Barra flotante inferior con tooltips instantáneos, separadores verticales y accesos rápidos.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdFloatingCommandDockComponent {
  @Input() title = '03. Floating Bottom Command Dock';
  @Input() badge = 'FLOATING DOCK';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('floating-command-dock');
  }
}
