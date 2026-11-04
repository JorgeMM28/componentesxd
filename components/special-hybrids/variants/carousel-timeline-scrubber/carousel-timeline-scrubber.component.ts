// Variante 13 — Carrusel Cinético Controlado por Slider Scrubber (timeline.seek) — Angular 18+ Signals (components/special-hybrids/variants/carousel-timeline-scrubber/carousel-timeline-scrubber.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-carousel-timeline-scrubber',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-carousel-timeline-scrubber" [attr.data-active]="active()">
      <h3>Variante 13 — Carrusel Cinético Controlado por Slider Scrubber (timeline.seek)</h3>
      <p>Arrastra la barra de tiempo para controlar manualmente la posición, rotación y escala de todo el carrusel.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdCarouselTimelineScrubberComponent {
  active = signal(false);
}
