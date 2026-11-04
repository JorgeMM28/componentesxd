// Variante 06 — Tarjeta con Formulario Rápido de Cotización / Config — Angular 18+ Signals (components/cards/variants/form-embedded-card/form-embedded-card.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-form-embedded-card',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-cards-form-embedded-card" [attr.data-active]="active()">
      <h3>Variante 06 — Tarjeta con Formulario Rápido de Cotización / Config</h3>
      <p>Permite ajustar parámetros con inputs y calcular el costo mensual directamente en la tarjeta.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdFormEmbeddedCardComponent {
  active = signal(false);
}
