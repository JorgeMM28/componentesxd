// Variante 01 — Botones Modernos Redondeados (Píldora & Glow) — Angular 18+ Signals (components/buttons/variants/modern-rounded-pills/modern-rounded-pills.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-modern-rounded-pills',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-buttons-modern-rounded-pills" [attr.data-active]="active()">
      <h3>Variante 01 — Botones Modernos Redondeados (Píldora & Glow)</h3>
      <p>Bordes completamente redondeados (999px), degradado sutil, sombra difusa y micro-escala al hacer clic.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdModernRoundedPillsComponent {
  active = signal(false);
}
