/**
 * ============================================================================
 * COMPONENTESXD — 04. Fullstack Compose (App + Postgres 17 + Redis 7.4) (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/docker/variants/fullstack-postgres-redis/fullstack-postgres-redis.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-fullstack-postgres-redis',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-docker-fullstack-postgres-redis" [attr.data-theme]="interfaceTheme">
      <header class="cxd-docker-fullstack-postgres-redis__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-docker-fullstack-postgres-redis__body">
        <p>Orquestación completa con volúmenes persistentes, redes aisladas y healthchecks deterministas.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdFullstackPostgresRedisComponent {
  @Input() title = '04. Fullstack Compose (App + Postgres 17 + Redis 7.4)';
  @Input() badge = 'DOCKER COMPOSE';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('fullstack-postgres-redis');
  }
}
