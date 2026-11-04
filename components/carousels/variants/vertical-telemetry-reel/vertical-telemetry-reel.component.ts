// Variante 04 — Carrusel Vertical Tipo Reel / Conmutador de Escenas en Eje Y — Angular 18+ Signals (components/carousels/variants/vertical-telemetry-reel/vertical-telemetry-reel.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-vertical-telemetry-reel',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-carousels-vertical-telemetry-reel" [attr.data-active]="active()">
      <h3>Variante 04 — Carrusel Vertical Tipo Reel / Conmutador de Escenas en Eje Y</h3>
      <p>Transición vertical elástica entre paneles de telemetría con selector lateral numerado y controles arriba/abajo.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdVerticalTelemetryReelComponent {
  active = signal(false);
}
