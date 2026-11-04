// Variante 21 — Escenario Relojería Cinética & Onda Radial (Inspirado en el Hero Oficial de Anime.js v4) — Angular 18+ Signals (components/special-hybrids/variants/anime-hero-clockwork/anime-hero-clockwork.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-anime-hero-clockwork',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-anime-hero-clockwork" [attr.data-active]="active()">
      <h3>Variante 21 — Escenario Relojería Cinética & Onda Radial (Inspirado en el Hero Oficial de Anime.js v4)</h3>
      <p>36 vectores radiales concéntricos, anillos orbitales y matriz sincronizada que ejecutan coreografías de relojería, explosión solar, vórtice espiral y pulso cuántico.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdAnimeHeroClockworkComponent {
  active = signal(false);
}
