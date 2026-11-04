// Variante 06 — Barra de Paginación Interactiva con Salto de Página — Angular 18+ Signals (components/navigation/variants/interactive-pagination/interactive-pagination.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-interactive-pagination',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-navigation-interactive-pagination" [attr.data-active]="active()">
      <h3>Variante 06 — Barra de Paginación Interactiva con Salto de Página</h3>
      <p>Haz clic en los números o botones Anterior/Siguiente para actualizar la página activa en vivo.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdInteractivePaginationComponent {
  active = signal(false);
}
