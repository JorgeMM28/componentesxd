// Variante 05 — Lista Clave-Valor con Copiado al Portapapeles por Fila — Angular 18+ Signals (components/badges-data/variants/copyable-spec-grid/copyable-spec-grid.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-copyable-spec-grid',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-badges-data-copyable-spec-grid" [attr.data-active]="active()">
      <h3>Variante 05 — Lista Clave-Valor con Copiado al Portapapeles por Fila</h3>
      <p>Haz clic en cualquier valor técnico (API Key, Host, SHA) para copiarlo instantáneamente.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdCopyableSpecGridComponent {
  active = signal(false);
}
