// Variante 05 — Matriz Interactiva OTP de 6 Dígitos (Auto-Avance) — Angular 18+ Signals (components/forms/variants/interactive-otp-pin/interactive-otp-pin.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-interactive-otp-pin',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-forms-interactive-otp-pin" [attr.data-active]="active()">
      <h3>Variante 05 — Matriz Interactiva OTP de 6 Dígitos (Auto-Avance)</h3>
      <p>Escribe números para avanzar automáticamente de casilla o usa el botón de autocompletar código.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdInteractiveOtpPinComponent {
  active = signal(false);
}
