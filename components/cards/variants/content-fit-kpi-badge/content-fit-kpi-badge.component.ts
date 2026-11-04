// Variante 07 — Tarjeta Content-Fit Compacta de Telemetría — Angular 18+ Signals (components/cards/variants/content-fit-kpi-badge/content-fit-kpi-badge.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-content-fit-kpi-badge',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-cards-content-fit-kpi-badge" [attr.data-active]="active()">
      <h3>Variante 07 — Tarjeta Content-Fit Compacta de Telemetría</h3>
      <p>Ocupa únicamente el espacio exacto de su cifra, sparkline SVG y variación porcentual.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdContentFitKpiBadgeComponent {
  active = signal(false);
}
