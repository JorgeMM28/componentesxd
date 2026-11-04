// Variante 04 — Tarjeta Interactiva con Pestañas Internas — Angular 18+ Signals (components/cards/variants/interactive-tabbed-card/interactive-tabbed-card.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-interactive-tabbed-card',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-cards-interactive-tabbed-card" [attr.data-active]="active()">
      <h3>Variante 04 — Tarjeta Interactiva con Pestañas Internas</h3>
      <p>Alterna entre Resumen, Métricas y Configuración dentro de la misma tarjeta sin recargar.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdInteractiveTabbedCardComponent {
  active = signal(false);
}
