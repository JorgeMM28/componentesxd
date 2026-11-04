// Variante 03 — Tarjeta Flotante con Perspectiva 3D Interactiva — Angular 18+ Signals (components/cards/variants/floating-3d-tilt/floating-3d-tilt.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-floating-3d-tilt',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-cards-floating-3d-tilt" [attr.data-active]="active()">
      <h3>Variante 03 — Tarjeta Flotante con Perspectiva 3D Interactiva</h3>
      <p>Mueve el cursor encima para inclinar la tarjeta en 3 ejes (rotateX / rotateY) con sombra profunda.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdFloating3dTiltComponent {
  active = signal(false);
}
