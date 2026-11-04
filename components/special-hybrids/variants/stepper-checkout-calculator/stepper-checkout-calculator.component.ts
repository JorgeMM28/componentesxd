// Variante 06 — Step-by-Step Configurador Cloud + Motor "Calculando..." en Tiempo Real — Angular 18+ Signals (components/special-hybrids/variants/stepper-checkout-calculator/stepper-checkout-calculator.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-stepper-checkout-calculator',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-stepper-checkout-calculator" [attr.data-active]="active()">
      <h3>Variante 06 — Step-by-Step Configurador Cloud + Motor "Calculando..." en Tiempo Real</h3>
      <p>Avanza por las etapas de hardware, red y réplicas recalculando el costo mensual con animación numérica instantánea.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdStepperCheckoutCalculatorComponent {
  active = signal(false);
}
