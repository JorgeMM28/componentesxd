// Variante 02 — Tabla Reactiva + Formulario de Inserción/Eliminación en Tiempo Real con Anime.js — Angular 18+ Signals (components/special-hybrids/variants/table-realtime-stream/table-realtime-stream.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-table-realtime-stream',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-table-realtime-stream" [attr.data-active]="active()">
      <h3>Variante 02 — Tabla Reactiva + Formulario de Inserción/Eliminación en Tiempo Real con Anime.js</h3>
      <p>Agrega nuevos registros desde el formulario integrado con animación spring de entrada, recálculo de suma animada y eliminación con colapso suave.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdTableRealtimeStreamComponent {
  active = signal(false);
}
