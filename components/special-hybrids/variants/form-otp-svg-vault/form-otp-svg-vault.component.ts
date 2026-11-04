// Variante 10 — Bóveda PIN/OTP + Escudo Vectorial Autodibujable (svg.createDrawable) — Angular 18+ Signals (components/special-hybrids/variants/form-otp-svg-vault/form-otp-svg-vault.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-form-otp-svg-vault',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-form-otp-svg-vault" [attr.data-active]="active()">
      <h3>Variante 10 — Bóveda PIN/OTP + Escudo Vectorial Autodibujable (svg.createDrawable)</h3>
      <p>Simula la validación criptográfica trazando el circuito SVG de seguridad y animando las casillas del código.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdFormOtpSvgVaultComponent {
  active = signal(false);
}
