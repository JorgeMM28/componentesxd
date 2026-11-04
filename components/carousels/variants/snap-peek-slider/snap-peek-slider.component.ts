// Variante 03 — Carrusel Multi-Tarjeta con Vista Previa Lateral (Peek) y Barra de Progreso — Angular 18+ Signals (components/carousels/variants/snap-peek-slider/snap-peek-slider.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-snap-peek-slider',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-carousels-snap-peek-slider" [attr.data-active]="active()">
      <h3>Variante 03 — Carrusel Multi-Tarjeta con Vista Previa Lateral (Peek) y Barra de Progreso</h3>
      <p>Muestra múltiples tarjetas visibles simultáneamente con desplazamiento suave, indicador numérico 01/05 y barra de progreso sincronizada.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdSnapPeekSliderComponent {
  active = signal(false);
}
