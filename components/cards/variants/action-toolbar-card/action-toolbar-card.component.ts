// Variante 05 — Tarjeta con Barra de Acciones (Favorito, Compartir, Archivar) — Angular 18+ Signals (components/cards/variants/action-toolbar-card/action-toolbar-card.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-action-toolbar-card',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-cards-action-toolbar-card" [attr.data-active]="active()">
      <h3>Variante 05 — Tarjeta con Barra de Acciones (Favorito, Compartir, Archivar)</h3>
      <p>Incluye botones inferiores interactivos con contadores que se actualizan en tiempo real.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdActionToolbarCardComponent {
  active = signal(false);
}
