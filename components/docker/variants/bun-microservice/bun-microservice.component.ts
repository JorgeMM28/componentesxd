// Variante 05 — Microservicio Ultra-Rápido con Bun Alpine — Angular 18+ Signals (components/docker/variants/bun-microservice/bun-microservice.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-bun-microservice',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-docker-bun-microservice" [attr.data-active]="active()">
      <h3>Variante 05 — Microservicio Ultra-Rápido con Bun Alpine</h3>
      <p>Ejecución directa de TypeScript con arranque en milisegundos y consumo mínimo de RAM.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdBunMicroserviceComponent {
  active = signal(false);
}
