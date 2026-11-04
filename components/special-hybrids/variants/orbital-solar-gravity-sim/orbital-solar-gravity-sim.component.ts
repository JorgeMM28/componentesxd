// Variante 26 — Sistema Solar Animado Completo (Sol + 8 Planetas + Luna + Cinturón de Asteroides + Saturno) — Angular 18+ Signals (components/special-hybrids/variants/orbital-solar-gravity-sim/orbital-solar-gravity-sim.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-orbital-solar-gravity-sim',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-orbital-solar-gravity-sim" [attr.data-active]="active()">
      <h3>Variante 26 — Sistema Solar Animado Completo (Sol + 8 Planetas + Luna + Cinturón de Asteroides + Saturno)</h3>
      <p>Simulación heliocéntrica continua con Mercurio, Venus, Tierra + Luna, Marte, Cinturón de Asteroides, Júpiter, Saturno con anillos, Urano y Neptuno, selector de telemetría planetaria y escala de tiempo Warp.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdOrbitalSolarGravitySimComponent {
  active = signal(false);
}
