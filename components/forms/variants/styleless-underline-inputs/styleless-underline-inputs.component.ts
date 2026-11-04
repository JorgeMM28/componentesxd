// Variante 02 — Inputs Styleless (Solo Línea Inferior Minimalista) — Angular 18+ Signals (components/forms/variants/styleless-underline-inputs/styleless-underline-inputs.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-styleless-underline-inputs',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-forms-styleless-underline-inputs" [attr.data-active]="active()">
      <h3>Variante 02 — Inputs Styleless (Solo Línea Inferior Minimalista)</h3>
      <p>Sin cajas laterales ni fondo: únicamente una línea inferior que se ilumina al escribir.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdStylelessUnderlineInputsComponent {
  active = signal(false);
}
