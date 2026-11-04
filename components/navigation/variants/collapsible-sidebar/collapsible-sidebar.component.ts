// Variante 07 — Sidebar Lateral Colapsable con Árbol de Proyectos y Estado de Clúster — Angular 18+ Signals (components/navigation/variants/collapsible-sidebar/collapsible-sidebar.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-collapsible-sidebar',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <nav class="cxd-navigation-collapsible-sidebar" [attr.data-active]="active()">
      <h3>Variante 07 — Sidebar Lateral Colapsable con Árbol de Proyectos y Estado de Clúster</h3>
      <p>Panel de navegación lateral con botón de colapso cinético (240px ↔ 68px), selector de entorno (Prod/Staging), árbol de módulos e indicador de salud.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </nav>
  `
})
export class CxdCollapsibleSidebarComponent {
  active = signal(false);
}
