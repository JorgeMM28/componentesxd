// Variante 07 — Carrusel con Barras de Tiempo Segmentadas (Autoplay + Pausa) — Angular 18+ Signals (components/carousels/variants/autoplay-story-bars/autoplay-story-bars.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-autoplay-story-bars',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-carousels-autoplay-story-bars" [attr.data-active]="active()">
      <h3>Variante 07 — Carrusel con Barras de Tiempo Segmentadas (Autoplay + Pausa)</h3>
      <p>Cabecera con segmentos de progreso temporales que avanzan automáticamente y permiten saltar a cualquier historia.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdAutoplayStoryBarsComponent {
  active = signal(false);
}
