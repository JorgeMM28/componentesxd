// Variante 02 — Tabla Styleless (Sin Bordes / Editorial) — Angular 18+ Signals (components/tables/variants/styleless-minimal/styleless-minimal.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-styleless-minimal',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-tables-styleless-minimal" [attr.data-active]="active()">
      <h3>Variante 02 — Tabla Styleless (Sin Bordes / Editorial)</h3>
      <p>Sin contenedor exterior ni líneas verticales. Puramente tipográfica con alineación generosa y subrayado sutil.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdStylelessMinimalComponent {
  active = signal(false);
}
