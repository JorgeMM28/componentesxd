// Variante 02 — Tarjeta Styleless Editorial (Sin Caja, Puro Layout) — Angular 18+ Signals (components/cards/variants/styleless-editorial/styleless-editorial.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-styleless-editorial',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-cards-styleless-editorial" [attr.data-active]="active()">
      <h3>Variante 02 — Tarjeta Styleless Editorial (Sin Caja, Puro Layout)</h3>
      <p>Diseño tipográfico tipo revista suiza con numeración grande, separador de 1px y lectura limpia.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdStylelessEditorialComponent {
  active = signal(false);
}
