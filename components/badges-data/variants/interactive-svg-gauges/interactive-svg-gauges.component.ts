// Variante 03 — Medidores Circulares SVG con Control Deslizante en Vivo — Angular 18+ Signals (components/badges-data/variants/interactive-svg-gauges/interactive-svg-gauges.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-interactive-svg-gauges',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-badges-data-interactive-svg-gauges" [attr.data-active]="active()">
      <h3>Variante 03 — Medidores Circulares SVG con Control Deslizante en Vivo</h3>
      <p>Mueve el control deslizante para actualizar en tiempo real el porcentaje y los anillos SVG.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdInteractiveSvgGaugesComponent {
  active = signal(false);
}
