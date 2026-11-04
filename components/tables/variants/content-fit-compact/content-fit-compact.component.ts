// Variante 03 — Tabla Content-Fit (Ajustada al Contenido) — Angular 18+ Signals (components/tables/variants/content-fit-compact/content-fit-compact.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-content-fit-compact',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-tables-content-fit-compact" [attr.data-active]="active()">
      <h3>Variante 03 — Tabla Content-Fit (Ajustada al Contenido)</h3>
      <p>Ancho automático exacto al texto (width: max-content), celdas ultra-compactas sin espacio desperdiciado.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdContentFitCompactComponent {
  active = signal(false);
}
