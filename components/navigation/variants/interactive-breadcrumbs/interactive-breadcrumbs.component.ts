// Variante 04 — Breadcrumbs Interactivos con Selector de Rama/Proyecto — Angular 18+ Signals (components/navigation/variants/interactive-breadcrumbs/interactive-breadcrumbs.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-interactive-breadcrumbs',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-navigation-interactive-breadcrumbs" [attr.data-active]="active()">
      <h3>Variante 04 — Breadcrumbs Interactivos con Selector de Rama/Proyecto</h3>
      <p>Ruta de navegación con menús desplegables integrados en cada nivel de jerarquía.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdInteractiveBreadcrumbsComponent {
  active = signal(false);
}
