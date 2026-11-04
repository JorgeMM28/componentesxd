// Variante 01 — Tarjeta Moderna Bordes Redondeados + Luz Radial — Angular 18+ Signals (components/cards/variants/modern-rounded-bento/modern-rounded-bento.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-modern-rounded-bento',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-cards-modern-rounded-bento" [attr.data-active]="active()">
      <h3>Variante 01 — Tarjeta Moderna Bordes Redondeados + Luz Radial</h3>
      <p>Radio suave de 20px, iluminación que sigue al cursor, insignia superior y métrica destacada.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdModernRoundedBentoComponent {
  active = signal(false);
}
