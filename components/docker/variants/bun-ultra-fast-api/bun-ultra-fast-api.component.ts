/**
 * ============================================================================
 * COMPONENTESXD — 05. Bun Distroless High-Performance Runtime (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/docker/variants/bun-ultra-fast-api/bun-ultra-fast-api.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-bun-ultra-fast-api',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-docker-bun-ultra-fast-api" [attr.data-theme]="interfaceTheme">
      <header class="cxd-docker-bun-ultra-fast-api__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-docker-bun-ultra-fast-api__body">
        <p>Contenedor basado en oven/bun:alpine para microservicios TypeScript de arranque instantáneo.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdBunUltraFastApiComponent {
  @Input() title = '05. Bun Distroless High-Performance Runtime';
  @Input() badge = 'BUN RUNTIME';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('bun-ultra-fast-api');
  }
}
