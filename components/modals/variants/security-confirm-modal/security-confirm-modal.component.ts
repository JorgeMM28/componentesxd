// Variante 05 — Modal de Confirmación con Validación de Texto — Angular 18+ Signals (components/modals/variants/security-confirm-modal/security-confirm-modal.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-security-confirm-modal',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-modals-security-confirm-modal" [attr.data-active]="active()">
      <h3>Variante 05 — Modal de Confirmación con Validación de Texto</h3>
      <p>Escribe "ELIMINAR" en el campo de confirmación para desbloquear el botón destructivo.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdSecurityConfirmModalComponent {
  active = signal(false);
}
