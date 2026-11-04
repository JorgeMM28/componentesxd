// Variante 05 — Carrusel Mazo 3D con Física de Resorte (createSpring) + Odómetro — Angular 18+ Signals (components/special-hybrids/variants/carousel-spring-physics-deck/carousel-spring-physics-deck.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-carousel-spring-physics-deck',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-carousel-spring-physics-deck" [attr.data-active]="active()">
      <h3>Variante 05 — Carrusel Mazo 3D con Física de Resorte (createSpring) + Odómetro</h3>
      <p>Rota las tarjetas en el eje Z con física real de resorte mientras el contador financiero interpola el valor del nodo activo.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdCarouselSpringPhysicsDeckComponent {
  active = signal(false);
}
