/**
 * ============================================================================
 * COMPONENTESXD — 06. Traefik v3 Automatic TLS + Reverse Proxy (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/docker/variants/traefik-reverse-proxy/traefik-reverse-proxy.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-traefik-reverse-proxy',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-docker-traefik-reverse-proxy" [attr.data-theme]="interfaceTheme">
      <header class="cxd-docker-traefik-reverse-proxy__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-docker-traefik-reverse-proxy__body">
        <p>Configuración lista para enrutar múltiples contenedores locales con certificados y balanceo automático.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdTraefikReverseProxyComponent {
  @Input() title = '06. Traefik v3 Automatic TLS + Reverse Proxy';
  @Input() badge = 'REVERSE PROXY';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('traefik-reverse-proxy');
  }
}
