// Variante 06 — Formulario con Validación y Medidor de Seguridad en Vivo — Angular 18+ Signals (components/forms/variants/live-validation-meter/live-validation-meter.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-live-validation-meter',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-forms-live-validation-meter" [attr.data-active]="active()">
      <h3>Variante 06 — Formulario con Validación y Medidor de Seguridad en Vivo</h3>
      <p>Escribe una contraseña para ver cómo se calculan en tiempo real los 4 niveles de fortaleza.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdLiveValidationMeterComponent {
  active = signal(false);
}
