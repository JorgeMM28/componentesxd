// Variante 09 — Tabla Expandible Master-Detail (Despliegue de Sub-Panel) — Angular 18+ Signals (components/tables/variants/expandable-detail/expandable-detail.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-expandable-detail',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-tables-expandable-detail" [attr.data-active]="active()">
      <h3>Variante 09 — Tabla Expandible Master-Detail (Despliegue de Sub-Panel)</h3>
      <p>Haz clic en cualquier fila para desplegar un panel técnico con historial, métricas y especificaciones.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdExpandableDetailComponent {
  active = signal(false);
}
