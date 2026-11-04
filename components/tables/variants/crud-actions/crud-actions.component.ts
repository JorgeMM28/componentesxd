// Variante 06 — Tabla con Acciones (Duplicar, Estado y Eliminar Fila) — Angular 18+ Signals (components/tables/variants/crud-actions/crud-actions.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-crud-actions',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-tables-crud-actions" [attr.data-active]="active()">
      <h3>Variante 06 — Tabla con Acciones (Duplicar, Estado y Eliminar Fila)</h3>
      <p>Botones funcionales en cada fila para cambiar estado, duplicar registro o eliminar con animación Anime.js.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdCrudActionsComponent {
  active = signal(false);
}
