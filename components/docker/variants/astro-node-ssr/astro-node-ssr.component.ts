// Variante 01 — Astro / Node 22 Alpine Multi-Stage SSR — Angular 18+ Signals (components/docker/variants/astro-node-ssr/astro-node-ssr.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-astro-node-ssr',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-docker-astro-node-ssr" [attr.data-active]="active()">
      <h3>Variante 01 — Astro / Node 22 Alpine Multi-Stage SSR</h3>
      <p>Contenedor de producción de 3 etapas (deps → builder → runner sin root) para Astro, Next o Remix.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdAstroNodeSsrComponent {
  active = signal(false);
}
