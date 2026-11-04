// Variante 02 — Dynamic Island Interactiva (3 Estados) — Angular 18+ Signals (components/toasts/variants/dynamic-island-morph/dynamic-island-morph.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-dynamic-island-morph',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-toasts-dynamic-island-morph" [attr.data-active]="active()">
      <h3>Variante 02 — Dynamic Island Interactiva (3 Estados)</h3>
      <p>Cápsula negra brillante que cambia de tamaño con Anime.js entre Compacto, Llamada/Proceso y Expandido.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdDynamicIslandMorphComponent {
  active = signal(false);
}
