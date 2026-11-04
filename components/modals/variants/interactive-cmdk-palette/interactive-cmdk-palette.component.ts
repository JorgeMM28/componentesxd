// Variante 02 — Command Palette Interactiva (Buscador en Vivo) — Angular 18+ Signals (components/modals/variants/interactive-cmdk-palette/interactive-cmdk-palette.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-interactive-cmdk-palette',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-modals-interactive-cmdk-palette" [attr.data-active]="active()">
      <h3>Variante 02 — Command Palette Interactiva (Buscador en Vivo)</h3>
      <p>Escribe en el buscador para filtrar comandos al instante y haz clic en cualquiera para ejecutarlo.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdInteractiveCmdkPaletteComponent {
  active = signal(false);
}
