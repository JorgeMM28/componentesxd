/**
 * ============================================================================
 * COMPONENTESXD — 03. React / Vue / Svelte / Angular SPA + Nginx (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/docker/variants/spa-nginx-brotli/spa-nginx-brotli.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-spa-nginx-brotli',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-docker-spa-nginx-brotli" [attr.data-theme]="interfaceTheme">
      <header class="cxd-docker-spa-nginx-brotli__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-docker-spa-nginx-brotli__body">
        <p>Compila estáticos en etapa builder y sirve con Nginx configurado con fallback SPA y cabeceras de caché.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdSpaNginxBrotliComponent {
  @Input() title = '03. React / Vue / Svelte / Angular SPA + Nginx';
  @Input() badge = 'NGINX ALPINE';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('spa-nginx-brotli');
  }
}
