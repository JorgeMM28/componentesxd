// Variante 04 — Tabla de Filas Flotantes Separadas — Angular 18+ Signals (components/tables/variants/floating-rows/floating-rows.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-floating-rows',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-tables-floating-rows" [attr.data-active]="active()">
      <h3>Variante 04 — Tabla de Filas Flotantes Separadas</h3>
      <p>Cada fila es una tarjeta independiente con sombra propia, bordes redondeados y elevación al pasar el cursor.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdFloatingRowsComponent {
  active = signal(false);
}
