// Variante 06 — Panel Inspector Lateral (Drawer de Detalles) — Angular 18+ Signals (components/modals/variants/slide-drawer-inspector/slide-drawer-inspector.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-slide-drawer-inspector',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-modals-slide-drawer-inspector" [attr.data-active]="active()">
      <h3>Variante 06 — Panel Inspector Lateral (Drawer de Detalles)</h3>
      <p>Estructura de panel lateral con pestañas de propiedades, JSON en vivo y botones de acción.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdSlideDrawerInspectorComponent {
  active = signal(false);
}
