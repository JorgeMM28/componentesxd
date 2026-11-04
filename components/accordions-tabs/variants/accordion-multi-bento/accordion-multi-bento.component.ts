// Variante 02 — Acordeón Multi-Apertura con Insignias de Estado y Buscador — Angular 18+ Signals (components/accordions-tabs/variants/accordion-multi-bento/accordion-multi-bento.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-accordion-multi-bento',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-accordions-tabs-accordion-multi-bento" [attr.data-active]="active()">
      <h3>Variante 02 — Acordeón Multi-Apertura con Insignias de Estado y Buscador</h3>
      <p>Permite mantener varios módulos abiertos al mismo tiempo o expandir/colapsar todos con un solo clic.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdAccordionMultiBentoComponent {
  active = signal(false);
}
