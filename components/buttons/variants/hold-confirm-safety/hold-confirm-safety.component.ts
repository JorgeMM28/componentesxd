// Variante 05 — Botón con Seguridad Hold-to-Confirm (Mantener Presionado) — Angular 18+ Signals (components/buttons/variants/hold-confirm-safety/hold-confirm-safety.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-hold-confirm-safety',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-buttons-hold-confirm-safety" [attr.data-active]="active()">
      <h3>Variante 05 — Botón con Seguridad Hold-to-Confirm (Mantener Presionado)</h3>
      <p>Mantén presionado el botón para llenar la barra de progreso roja hasta el 100% y ejecutar la acción.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdHoldConfirmSafetyComponent {
  active = signal(false);
}
