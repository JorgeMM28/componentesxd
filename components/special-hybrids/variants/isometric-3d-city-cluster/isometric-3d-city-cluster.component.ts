// Variante 27 — Ciudadela Isométrica 3D de Servidores con Onda Espacial 4×4 — Angular 18+ Signals (components/special-hybrids/variants/isometric-3d-city-cluster/isometric-3d-city-cluster.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-isometric-3d-city-cluster',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-isometric-3d-city-cluster" [attr.data-active]="active()">
      <h3>Variante 27 — Ciudadela Isométrica 3D de Servidores con Onda Espacial 4×4</h3>
      <p>16 torres tridimensionales en perspectiva isométrica real que modulan su elevación Z con stagger 2D radial.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdIsometric3dCityClusterComponent {
  active = signal(false);
}
