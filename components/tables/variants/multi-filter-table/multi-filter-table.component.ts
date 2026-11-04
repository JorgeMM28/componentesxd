// Variante 08 — Tabla con Filtros Avanzados (Buscador + Categoría + Estado) — Angular 18+ Signals (components/tables/variants/multi-filter-table/multi-filter-table.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-multi-filter-table',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-tables-multi-filter-table" [attr.data-active]="active()">
      <h3>Variante 08 — Tabla con Filtros Avanzados (Buscador + Categoría + Estado)</h3>
      <p>Barra superior con buscador instantáneo, selector de departamento y botones de estado combinables.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdMultiFilterTableComponent {
  active = signal(false);
}
