// Variante 03 — React / Vue / Svelte / Angular SPA + Nginx — Angular 18+ Signals (components/docker/variants/spa-nginx-alpine/spa-nginx-alpine.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-spa-nginx-alpine',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-docker-spa-nginx-alpine" [attr.data-active]="active()">
      <h3>Variante 03 — React / Vue / Svelte / Angular SPA + Nginx</h3>
      <p>Compilación estática servida por Nginx Alpine con compresión gzip y try_files para rutas SPA.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdSpaNginxAlpineComponent {
  active = signal(false);
}
