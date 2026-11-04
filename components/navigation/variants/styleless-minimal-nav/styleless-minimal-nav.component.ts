// Variante 03 — Navegación Styleless Minimalista con Indicador Deslizante — Angular 18+ Signals (components/navigation/variants/styleless-minimal-nav/styleless-minimal-nav.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-styleless-minimal-nav',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-navigation-styleless-minimal-nav" [attr.data-active]="active()">
      <h3>Variante 03 — Navegación Styleless Minimalista con Indicador Deslizante</h3>
      <p>Pestañas limpias sin bordes laterales donde la línea activa viaja suavemente al elemento clicado.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdStylelessMinimalNavComponent {
  active = signal(false);
}
