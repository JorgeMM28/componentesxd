// Variante 01 — Colección de Badges Modernos, Outline y Con Punto Pulsante — Angular 18+ Signals (components/badges-data/variants/modern-pulse-badges/modern-pulse-badges.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-modern-pulse-badges',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-badges-data-modern-pulse-badges" [attr.data-active]="active()">
      <h3>Variante 01 — Colección de Badges Modernos, Outline y Con Punto Pulsante</h3>
      <p>Insignias redondeadas, cuadradas, sin bordes y con botón de cierre eliminable en vivo.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdModernPulseBadgesComponent {
  active = signal(false);
}
