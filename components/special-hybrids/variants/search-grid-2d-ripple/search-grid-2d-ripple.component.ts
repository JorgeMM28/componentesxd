// Variante 14 — Buscador de Nodos + Matriz 2D con Onda Radial (stagger grid) — Angular 18+ Signals (components/special-hybrids/variants/search-grid-2d-ripple/search-grid-2d-ripple.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-search-grid-2d-ripple',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-search-grid-2d-ripple" [attr.data-active]="active()">
      <h3>Variante 14 — Buscador de Nodos + Matriz 2D con Onda Radial (stagger grid)</h3>
      <p>Haz clic en cualquier nodo del cluster o filtra por estado para expandir una onda 2D desde ese punto exacto.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdSearchGrid2dRippleComponent {
  active = signal(false);
}
