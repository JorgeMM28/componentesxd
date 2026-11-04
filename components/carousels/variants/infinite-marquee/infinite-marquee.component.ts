// Variante 02 — Carrusel Marquesina Infinita Continua (Control de Velocidad y Dirección) — Angular 18+ Signals (components/carousels/variants/infinite-marquee/infinite-marquee.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-infinite-marquee',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-carousels-infinite-marquee" [attr.data-active]="active()">
      <h3>Variante 02 — Carrusel Marquesina Infinita Continua (Control de Velocidad y Dirección)</h3>
      <p>Cinta continua sin costuras para nodos, métricas o marcas con botones para invertir dirección, pausar o acelerar en vivo.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdInfiniteMarqueeComponent {
  active = signal(false);
}
