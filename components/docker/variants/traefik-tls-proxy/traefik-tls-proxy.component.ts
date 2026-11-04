// Variante 06 — Proxy Inverso Traefik v3 con Balanceo Automático — Angular 18+ Signals (components/docker/variants/traefik-tls-proxy/traefik-tls-proxy.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-traefik-tls-proxy',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-docker-traefik-tls-proxy" [attr.data-active]="active()">
      <h3>Variante 06 — Proxy Inverso Traefik v3 con Balanceo Automático</h3>
      <p>Enrutamiento dinámico por etiquetas de contenedor y certificados TLS automáticos.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdTraefikTlsProxyComponent {
  active = signal(false);
}
