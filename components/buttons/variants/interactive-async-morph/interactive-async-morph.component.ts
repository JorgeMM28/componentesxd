// Variante 04 — Botón Interactivo de 3 Estados (Reposo -> Cargando -> Éxito) — Angular 18+ Signals (components/buttons/variants/interactive-async-morph/interactive-async-morph.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-interactive-async-morph',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-buttons-interactive-async-morph" [attr.data-active]="active()">
      <h3>Variante 04 — Botón Interactivo de 3 Estados (Reposo -> Cargando -> Éxito)</h3>
      <p>Haz clic para ver cómo bloquea la acción, muestra el spinner rotativo y cambia a estado completado.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdInteractiveAsyncMorphComponent {
  active = signal(false);
}
