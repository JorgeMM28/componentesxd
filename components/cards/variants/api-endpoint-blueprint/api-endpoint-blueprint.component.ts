/**
 * ============================================================================
 * COMPONENTESXD — 03. REST / GraphQL Endpoint Spec Card (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/cards/variants/api-endpoint-blueprint/api-endpoint-blueprint.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-api-endpoint-blueprint',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-cards-api-endpoint-blueprint" [attr.data-theme]="interfaceTheme">
      <header class="cxd-cards-api-endpoint-blueprint__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-cards-api-endpoint-blueprint__body">
        <p>Muestra método HTTP, ruta parametrizada, latencia media y esquema de respuesta con botón de prueba.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdApiEndpointBlueprintComponent {
  @Input() title = '03. REST / GraphQL Endpoint Spec Card';
  @Input() badge = 'API SPEC';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('api-endpoint-blueprint');
  }
}
