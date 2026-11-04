// Variante 07 — Panel de Filtros Interactivos (Chips + Rango + Buscador) — Angular 18+ Signals (components/forms/variants/filter-search-facet/filter-search-facet.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-filter-search-facet',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-forms-filter-search-facet" [attr.data-active]="active()">
      <h3>Variante 07 — Panel de Filtros Interactivos (Chips + Rango + Buscador)</h3>
      <p>Selecciona etiquetas múltiples y desliza el rango de precio para ver el resumen de filtros activos.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdFilterSearchFacetComponent {
  active = signal(false);
}
