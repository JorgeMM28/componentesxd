// Variante 01 — Acordeón Exclusivo (Single-Open) con Animación de Altura — Angular 18+ Signals (components/accordions-tabs/variants/accordion-exclusive/accordion-exclusive.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-accordion-exclusive',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-accordions-tabs-accordion-exclusive" [attr.data-active]="active()">
      <h3>Variante 01 — Acordeón Exclusivo (Single-Open) con Animación de Altura</h3>
      <p>Al expandir una sección técnica se cierran automáticamente las demás manteniendo el foco de lectura.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdAccordionExclusiveComponent {
  active = signal(false);
}
