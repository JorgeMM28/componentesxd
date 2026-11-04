// Variante 02 — Botones Styleless (Subrayado Cinético sin Caja) — Angular 18+ Signals (components/buttons/variants/styleless-text-links/styleless-text-links.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-styleless-text-links',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-buttons-styleless-text-links" [attr.data-active]="active()">
      <h3>Variante 02 — Botones Styleless (Subrayado Cinético sin Caja)</h3>
      <p>Cero bordes ni fondos: línea inferior que crece de izquierda a derecha y flecha SVG que avanza al pasar el cursor.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdStylelessTextLinksComponent {
  active = signal(false);
}
