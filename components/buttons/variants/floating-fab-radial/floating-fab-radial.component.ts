// Variante 03 — Botón Flotante (FAB) con Menú Desplegable — Angular 18+ Signals (components/buttons/variants/floating-fab-radial/floating-fab-radial.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-floating-fab-radial',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-buttons-floating-fab-radial" [attr.data-active]="active()">
      <h3>Variante 03 — Botón Flotante (FAB) con Menú Desplegable</h3>
      <p>Botón circular flotante que al hacer clic despliega 3 acciones satélite con física elástica.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdFloatingFabRadialComponent {
  active = signal(false);
}
