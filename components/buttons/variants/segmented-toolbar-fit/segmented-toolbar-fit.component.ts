// Variante 07 — Barra de Botones Content-Fit con Indicador Activo — Angular 18+ Signals (components/buttons/variants/segmented-toolbar-fit/segmented-toolbar-fit.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-segmented-toolbar-fit',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-buttons-segmented-toolbar-fit" [attr.data-active]="active()">
      <h3>Variante 07 — Barra de Botones Content-Fit con Indicador Activo</h3>
      <p>Grupo compacto unido donde la selección activa cambia instantáneamente al hacer clic.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdSegmentedToolbarFitComponent {
  active = signal(false);
}
