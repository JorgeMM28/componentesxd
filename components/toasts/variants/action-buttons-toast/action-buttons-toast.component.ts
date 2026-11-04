// Variante 03 — Toaster con Acciones (Aceptar, Posponer, Deshacer) — Angular 18+ Signals (components/toasts/variants/action-buttons-toast/action-buttons-toast.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-action-buttons-toast',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-toasts-action-buttons-toast" [attr.data-active]="active()">
      <h3>Variante 03 — Toaster con Acciones (Aceptar, Posponer, Deshacer)</h3>
      <p>Notificación de invitación/despliegue con botones interactivos que confirman o revierten la operación en vivo.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdActionButtonsToastComponent {
  active = signal(false);
}
