// Variante 17 — Topología Docker + Simulador de Paquetes en Red con Anime.js — Angular 18+ Signals (components/special-hybrids/variants/docker-live-deploy-topology/docker-live-deploy-topology.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-docker-live-deploy-topology',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-docker-live-deploy-topology" [attr.data-active]="active()">
      <h3>Variante 17 — Topología Docker + Simulador de Paquetes en Red con Anime.js</h3>
      <p>Envía paquetes de prueba a través del proxy, aplicación y base de datos animando cada salto y latencia.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdDockerLiveDeployTopologyComponent {
  active = signal(false);
}
