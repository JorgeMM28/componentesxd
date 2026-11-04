// Variante 04 — Docker Compose Fullstack (App + Postgres 17 + Redis 7.4) — Angular 18+ Signals (components/docker/variants/fullstack-compose-stack/fullstack-compose-stack.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-fullstack-compose-stack',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-docker-fullstack-compose-stack" [attr.data-active]="active()">
      <h3>Variante 04 — Docker Compose Fullstack (App + Postgres 17 + Redis 7.4)</h3>
      <p>Orquestación completa con volúmenes persistentes y healthchecks automáticos.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdFullstackComposeStackComponent {
  active = signal(false);
}
