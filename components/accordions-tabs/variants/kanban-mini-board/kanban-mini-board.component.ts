// Variante 04 — Tablero Kanban Interactivo (Mover Tareas entre Columnas en Vivo) — Angular 18+ Signals (components/accordions-tabs/variants/kanban-mini-board/kanban-mini-board.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-kanban-mini-board',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-accordions-tabs-kanban-mini-board" [attr.data-active]="active()">
      <h3>Variante 04 — Tablero Kanban Interactivo (Mover Tareas entre Columnas en Vivo)</h3>
      <p>Tarjetas operativas con botones para promover o regresar tareas entre Backlog, En Progreso y Producción.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdKanbanMiniBoardComponent {
  active = signal(false);
}
