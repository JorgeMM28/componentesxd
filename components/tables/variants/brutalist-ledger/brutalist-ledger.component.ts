// Variante 10 — Tabla Industrial Cebra con Pie de Sumatoria — Angular 18+ Signals (components/tables/variants/brutalist-ledger/brutalist-ledger.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-brutalist-ledger',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-tables-brutalist-ledger" [attr.data-active]="active()">
      <h3>Variante 10 — Tabla Industrial Cebra con Pie de Sumatoria</h3>
      <p>Alto contraste con filas alternadas (zebra), bordes marcados de 2px y fila tfoot de balance total.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdBrutalistLedgerComponent {
  active = signal(false);
}
