// Variante 04 — Línea de Tiempo (Timeline) con Filtro de Eventos — Angular 18+ Signals (components/badges-data/variants/vertical-event-timeline/vertical-event-timeline.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-vertical-event-timeline',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-badges-data-vertical-event-timeline" [attr.data-active]="active()">
      <h3>Variante 04 — Línea de Tiempo (Timeline) con Filtro de Eventos</h3>
      <p>Cronología vertical con nodos conectados, estados de despliegue y botón para agregar nuevo evento.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdVerticalEventTimelineComponent {
  active = signal(false);
}
