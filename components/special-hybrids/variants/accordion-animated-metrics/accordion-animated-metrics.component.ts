// Variante 18 — Acordeón Técnico + Telemetría que Anima de 0% a 100% al Expandir — Angular 18+ Signals (components/special-hybrids/variants/accordion-animated-metrics/accordion-animated-metrics.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-accordion-animated-metrics',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-accordion-animated-metrics" [attr.data-active]="active()">
      <h3>Variante 18 — Acordeón Técnico + Telemetría que Anima de 0% a 100% al Expandir</h3>
      <p>Cada vez que abres una sección del acordeón, sus barras y métricas internas se animan dinámicamente.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdAccordionAnimatedMetricsComponent {
  active = signal(false);
}
