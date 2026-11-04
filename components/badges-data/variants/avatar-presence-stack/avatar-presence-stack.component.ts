/**
 * ============================================================================
 * COMPONENTESXD — 05. Collaborator Avatar Stack + Presence Ring (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/badges-data/variants/avatar-presence-stack/avatar-presence-stack.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-avatar-presence-stack',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-badges-data-avatar-presence-stack" [attr.data-theme]="interfaceTheme">
      <header class="cxd-badges-data-avatar-presence-stack__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-badges-data-avatar-presence-stack__body">
        <p>Grupo superpuesto de colaboradores activos con contador de excedente (+8) y estado online.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdAvatarPresenceStackComponent {
  @Input() title = '05. Collaborator Avatar Stack + Presence Ring';
  @Input() badge = 'PRESENCE UI';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('avatar-presence-stack');
  }
}
