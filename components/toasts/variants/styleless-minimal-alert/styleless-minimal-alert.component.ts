// Variante 06 — Alerta Styleless Minimalista (Tipografía + Línea) — Angular 18+ Signals (components/toasts/variants/styleless-minimal-alert/styleless-minimal-alert.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-styleless-minimal-alert',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-toasts-styleless-minimal-alert" [attr.data-active]="active()">
      <h3>Variante 06 — Alerta Styleless Minimalista (Tipografía + Línea)</h3>
      <p>Sin caja ni sombras: solo una línea vertical de 2px, texto directo y enlace de acción limpio.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdStylelessMinimalAlertComponent {
  active = signal(false);
}
