// Variante 08 — Botón Mecánico 3D de Presión Física — Angular 18+ Signals (components/buttons/variants/brutalist-3d-push/brutalist-3d-push.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-brutalist-3d-push',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-buttons-brutalist-3d-push" [attr.data-active]="active()">
      <h3>Variante 08 — Botón Mecánico 3D de Presión Física</h3>
      <p>Borde grueso y sombra sólida inferior que se hunde físicamente cada vez que lo presionas.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdBrutalist3dPushComponent {
  active = signal(false);
}
