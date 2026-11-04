// Variante 05 — Generador Interactivo de Pila de Toasters — Angular 18+ Signals (components/toasts/variants/stacker-spawner-toast/stacker-spawner-toast.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-stacker-spawner-toast',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-toasts-stacker-spawner-toast" [attr.data-active]="active()">
      <h3>Variante 05 — Generador Interactivo de Pila de Toasters</h3>
      <p>Haz clic en los botones para disparar toasters reales de Éxito, Alerta o Error que se apilan con Anime.js.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdStackerSpawnerToastComponent {
  active = signal(false);
}
