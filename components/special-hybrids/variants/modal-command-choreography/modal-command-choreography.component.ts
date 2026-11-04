// Variante 15 — Command Palette + Consola de Ejecución Paso a Paso Animada — Angular 18+ Signals (components/special-hybrids/variants/modal-command-choreography/modal-command-choreography.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-modal-command-choreography',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-modal-command-choreography" [attr.data-active]="active()">
      <h3>Variante 15 — Command Palette + Consola de Ejecución Paso a Paso Animada</h3>
      <p>Dispara cualquier comando de la lista para ejecutar una secuencia de terminal animada en tiempo real.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdModalCommandChoreographyComponent {
  active = signal(false);
}
