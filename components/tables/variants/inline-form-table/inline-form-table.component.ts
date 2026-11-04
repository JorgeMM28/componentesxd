// Variante 07 — Tabla con Formulario Integrado (Inputs, Selects y Cálculo) — Angular 18+ Signals (components/tables/variants/inline-form-table/inline-form-table.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-inline-form-table',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-tables-inline-form-table" [attr.data-active]="active()">
      <h3>Variante 07 — Tabla con Formulario Integrado (Inputs, Selects y Cálculo)</h3>
      <p>Celdas con inputs numéricos, selectores desplegables y switches que recalculan el subtotal de la tabla en vivo.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdInlineFormTableComponent {
  active = signal(false);
}
