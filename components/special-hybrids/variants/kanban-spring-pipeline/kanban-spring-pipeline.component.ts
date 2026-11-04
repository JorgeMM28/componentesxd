// Variante 09 — Tablero Kanban con Física Spring + Barra de Progreso Global Animada — Angular 18+ Signals (components/special-hybrids/variants/kanban-spring-pipeline/kanban-spring-pipeline.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-kanban-spring-pipeline',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-kanban-spring-pipeline" [attr.data-active]="active()">
      <h3>Variante 09 — Tablero Kanban con Física Spring + Barra de Progreso Global Animada</h3>
      <p>Promueve tarjetas entre etapas disparando rebote físico y actualizando el porcentaje global del sprint.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdKanbanSpringPipelineComponent {
  active = signal(false);
}
