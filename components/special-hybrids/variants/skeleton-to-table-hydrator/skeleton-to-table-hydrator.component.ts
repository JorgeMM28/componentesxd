// Variante 12 — Tabla con Skeleton Cargando → Hidratación Real Escalonada — Angular 18+ Signals (components/special-hybrids/variants/skeleton-to-table-hydrator/skeleton-to-table-hydrator.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-skeleton-to-table-hydrator',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-skeleton-to-table-hydrator" [attr.data-active]="active()">
      <h3>Variante 12 — Tabla con Skeleton Cargando → Hidratación Real Escalonada</h3>
      <p>Conmuta entre el estado de carga (Skeleton Shimmer) y la tabla hidratada con entrada escalonada por fila.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdSkeletonToTableHydratorComponent {
  active = signal(false);
}
