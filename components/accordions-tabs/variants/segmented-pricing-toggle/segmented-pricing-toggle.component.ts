// Variante 05 — Conmutador de Planes Mensual / Anual con Recálculo Animado — Angular 18+ Signals (components/accordions-tabs/variants/segmented-pricing-toggle/segmented-pricing-toggle.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-segmented-pricing-toggle',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-accordions-tabs-segmented-pricing-toggle" [attr.data-active]="active()">
      <h3>Variante 05 — Conmutador de Planes Mensual / Anual con Recálculo Animado</h3>
      <p>Alterna entre facturación mensual y anual aplicando descuento automático e interpolando las tarifas en vivo.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdSegmentedPricingToggleComponent {
  active = signal(false);
}
