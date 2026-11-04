// Variante 02 — Acordeón Interactivo Multi-Sección — Angular 18+ Signals (components/badges-data/variants/interactive-accordion/interactive-accordion.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-interactive-accordion',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-badges-data-interactive-accordion" [attr.data-active]="active()">
      <h3>Variante 02 — Acordeón Interactivo Multi-Sección</h3>
      <p>Haz clic en cualquier cabecera para expandir o contraer su contenido suavemente.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdInteractiveAccordionComponent {
  active = signal(false);
}
