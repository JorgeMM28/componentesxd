// Variante 01 — Toaster Moderno Flotante con Barra de Tiempo — Angular 18+ Signals (components/toasts/variants/modern-floating-toast/modern-floating-toast.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-modern-floating-toast',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-toasts-modern-floating-toast" [attr.data-active]="active()">
      <h3>Variante 01 — Toaster Moderno Flotante con Barra de Tiempo</h3>
      <p>Bordes redondeados suaves, icono en cápsula, botón de reinicio de barra de progreso y cierre animado.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdModernFloatingToastComponent {
  active = signal(false);
}
