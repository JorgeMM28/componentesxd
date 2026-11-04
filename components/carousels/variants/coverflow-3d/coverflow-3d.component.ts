// Variante 01 — Carrusel 3D Coverflow con Perspectiva e Inclinación — Angular 18+ Signals (components/carousels/variants/coverflow-3d/coverflow-3d.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-coverflow-3d',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-carousels-coverflow-3d" [attr.data-active]="active()">
      <h3>Variante 01 — Carrusel 3D Coverflow con Perspectiva e Inclinación</h3>
      <p>Tarjetas en perspectiva tridimensional donde la diapositiva central avanza al frente y las laterales rotan en eje Y con Anime.js v4.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdCoverflow3dComponent {
  active = signal(false);
}
