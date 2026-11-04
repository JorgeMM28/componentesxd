// Variante 04 — Inputs con Etiqueta Flotante Animada — Angular 18+ Signals (components/forms/variants/floating-label-inputs/floating-label-inputs.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-floating-label-inputs',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-forms-floating-label-inputs" [attr.data-active]="active()">
      <h3>Variante 04 — Inputs con Etiqueta Flotante Animada</h3>
      <p>La etiqueta viaja suavemente hacia el borde superior cuando haces clic o escribes contenido.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdFloatingLabelInputsComponent {
  active = signal(false);
}
