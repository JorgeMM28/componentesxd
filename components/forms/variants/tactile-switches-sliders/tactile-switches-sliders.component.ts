// Variante 08 — Controles Interactivos (Switches, Stepper Numérico y Radios) — Angular 18+ Signals (components/forms/variants/tactile-switches-sliders/tactile-switches-sliders.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-tactile-switches-sliders',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-forms-tactile-switches-sliders" [attr.data-active]="active()">
      <h3>Variante 08 — Controles Interactivos (Switches, Stepper Numérico y Radios)</h3>
      <p>Interruptores animados, contador con botones +/- y selector de tarjetas de opción.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdTactileSwitchesSlidersComponent {
  active = signal(false);
}
