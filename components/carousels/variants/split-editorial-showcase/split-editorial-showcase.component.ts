// Variante 05 — Carrusel Split-Screen Sincronizado (Arte Visual + Especificaciones) — Angular 18+ Signals (components/carousels/variants/split-editorial-showcase/split-editorial-showcase.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-split-editorial-showcase',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-carousels-split-editorial-showcase" [attr.data-active]="active()">
      <h3>Variante 05 — Carrusel Split-Screen Sincronizado (Arte Visual + Especificaciones)</h3>
      <p>Doble panel donde el lienzo visual izquierdo y la ficha técnica derecha se actualizan de forma coordinada con stagger.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdSplitEditorialShowcaseComponent {
  active = signal(false);
}
