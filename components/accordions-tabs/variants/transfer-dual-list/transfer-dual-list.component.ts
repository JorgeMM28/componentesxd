// Variante 07 — Lista Dual de Transferencia (Mover Permisos Izquierda ↔ Derecha) — Angular 18+ Signals (components/accordions-tabs/variants/transfer-dual-list/transfer-dual-list.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-transfer-dual-list',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-accordions-tabs-transfer-dual-list" [attr.data-active]="active()">
      <h3>Variante 07 — Lista Dual de Transferencia (Mover Permisos Izquierda ↔ Derecha)</h3>
      <p>Selecciona y transfiere módulos entre la columna de Disponibles y la columna de Activos en tiempo real.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdTransferDualListComponent {
  active = signal(false);
}
