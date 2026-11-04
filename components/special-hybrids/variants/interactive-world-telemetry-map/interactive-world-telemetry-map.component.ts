// Variante 22 — Mapa Mundial Interactivo con Rutas de Tráfico en Vivo (svg.createMotionPath) — Angular 18+ Signals (components/special-hybrids/variants/interactive-world-telemetry-map/interactive-world-telemetry-map.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-interactive-world-telemetry-map',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-interactive-world-telemetry-map" [attr.data-active]="active()">
      <h3>Variante 22 — Mapa Mundial Interactivo con Rutas de Tráfico en Vivo (svg.createMotionPath)</h3>
      <p>Haz clic en cualquier centro de datos (Tokyo, Frankfurt, New York, São Paulo, Sydney, SF) para redirigir los paquetes luminosos globales y disparar ondas de choque.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdInteractiveWorldTelemetryMapComponent {
  active = signal(false);
}
