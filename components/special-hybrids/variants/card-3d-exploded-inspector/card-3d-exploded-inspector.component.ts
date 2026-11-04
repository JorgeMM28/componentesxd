// Variante 11 — Tarjeta Inspectora + Descomposición 3D de Capas Estructurales — Angular 18+ Signals (components/special-hybrids/variants/card-3d-exploded-inspector/card-3d-exploded-inspector.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-card-3d-exploded-inspector',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-card-3d-exploded-inspector" [attr.data-active]="active()">
      <h3>Variante 11 — Tarjeta Inspectora + Descomposición 3D de Capas Estructurales</h3>
      <p>Alterna entre la tarjeta ensamblada funcional y su vista explotada isométrica de 4 capas en vivo.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdCard3dExplodedInspectorComponent {
  active = signal(false);
}
