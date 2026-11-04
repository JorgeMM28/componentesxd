// Variante 03 — Formulario Content-Fit en Una Sola Línea — Angular 18+ Signals (components/forms/variants/content-fit-inline-bar/content-fit-inline-bar.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-content-fit-inline-bar',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-forms-content-fit-inline-bar" [attr.data-active]="active()">
      <h3>Variante 03 — Formulario Content-Fit en Una Sola Línea</h3>
      <p>Combina selector de prefijo, campo de texto y botón de envío en una sola cápsula compacta.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdContentFitInlineBarComponent {
  active = signal(false);
}
