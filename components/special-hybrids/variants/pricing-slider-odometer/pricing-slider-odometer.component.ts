// Variante 16 — Calculadora Interactiva con Slider + Odómetro + Barras Comparativas — Angular 18+ Signals (components/special-hybrids/variants/pricing-slider-odometer/pricing-slider-odometer.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-pricing-slider-odometer',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-pricing-slider-odometer" [attr.data-active]="active()">
      <h3>Variante 16 — Calculadora Interactiva con Slider + Odómetro + Barras Comparativas</h3>
      <p>Ajusta el volumen de tráfico para animar simultáneamente las barras de los 3 planes y el costo estimado.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdPricingSliderOdometerComponent {
  active = signal(false);
}
