// Variante 05 — Tabla Interactiva (Ordenamiento + Selección en Vivo) — Angular 18+ Signals (components/tables/variants/interactive-sort-select/interactive-sort-select.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-interactive-sort-select',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-tables-interactive-sort-select" [attr.data-active]="active()">
      <h3>Variante 05 — Tabla Interactiva (Ordenamiento + Selección en Vivo)</h3>
      <p>Haz clic en las cabeceras para ordenar filas dinámicamente y marca casillas para activar la barra de lote.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdInteractiveSortSelectComponent {
  active = signal(false);
}
