// Variante 01 — Tabla Moderna de Bordes Redondeados — Angular 18+ Signals (components/tables/variants/modern-rounded/modern-rounded.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-modern-rounded',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-tables-modern-rounded" [attr.data-active]="active()">
      <h3>Variante 01 — Tabla Moderna de Bordes Redondeados</h3>
      <p>Contenedor con radio amplio de 18px, cabeceras suaves tipo cápsula, avatares circulares y badges pastilla.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdModernRoundedComponent {
  active = signal(false);
}
