// Variante 03 — Tabla con Reordenamiento Coreografiado (stagger) y Barras Cinéticas — Angular 18+ Signals (components/special-hybrids/variants/table-stagger-sorter/table-stagger-sorter.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-table-stagger-sorter',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-table-stagger-sorter" [attr.data-active]="active()">
      <h3>Variante 03 — Tabla con Reordenamiento Coreografiado (stagger) y Barras Cinéticas</h3>
      <p>Ordena por latencia, carga o nombre y observa cómo todas las filas y sus barras internas se reacomodan con una onda escalonada.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdTableStaggerSorterComponent {
  active = signal(false);
}
