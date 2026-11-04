// Variante 08 — Tarjeta con Despliegue de Detalles Técnicos — Angular 18+ Signals (components/cards/variants/expandable-drawer-card/expandable-drawer-card.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-expandable-drawer-card',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-cards-expandable-drawer-card" [attr.data-active]="active()">
      <h3>Variante 08 — Tarjeta con Despliegue de Detalles Técnicos</h3>
      <p>Haz clic en el botón de expansión para revelar u ocultar el bloque completo de logs y nodos.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdExpandableDrawerCardComponent {
  active = signal(false);
}
