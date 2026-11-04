// Variante 06 — Botón con Menú de Acciones (Split Dropdown) — Angular 18+ Signals (components/buttons/variants/split-dropdown-action/split-dropdown-action.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-split-dropdown-action',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-buttons-split-dropdown-action" [attr.data-active]="active()">
      <h3>Variante 06 — Botón con Menú de Acciones (Split Dropdown)</h3>
      <p>Botón dividido: la izquierda ejecuta la acción seleccionada y la derecha despliega la lista de modos.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdSplitDropdownActionComponent {
  active = signal(false);
}
