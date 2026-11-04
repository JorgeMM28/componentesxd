// Variante 09 — Navigation Rail Ultra-Compacto con Tooltips y Puntos Activos — Angular 18+ Signals (components/navigation/variants/compact-navigation-rail/compact-navigation-rail.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-compact-navigation-rail',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <nav class="cxd-navigation-compact-navigation-rail" [attr.data-active]="active()">
      <h3>Variante 09 — Navigation Rail Ultra-Compacto con Tooltips y Puntos Activos</h3>
      <p>Riel de navegación vertical ultra-delgado de 56px para consolas cloud con iconos vectoriales, tooltips flotantes e indicador de nodo activo.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </nav>
  `
})
export class CxdCompactNavigationRailComponent {
  active = signal(false);
}
