// Variante 04 — Carrusel de Escenas + Transformación Geométrica SVG (svg.morphTo) — Angular 18+ Signals (components/special-hybrids/variants/carousel-svg-morph-showcase/carousel-svg-morph-showcase.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-carousel-svg-morph-showcase',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-carousel-svg-morph-showcase" [attr.data-active]="active()">
      <h3>Variante 04 — Carrusel de Escenas + Transformación Geométrica SVG (svg.morphTo)</h3>
      <p>Cada diapositiva del carrusel transforma los vértices del polígono vectorial central e interpola las métricas del sistema.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdCarouselSvgMorphShowcaseComponent {
  active = signal(false);
}
