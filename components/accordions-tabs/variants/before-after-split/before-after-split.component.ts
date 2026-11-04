// Variante 03 — Comparador Visual Before / After con Cortina Deslizable — Angular 18+ Signals (components/accordions-tabs/variants/before-after-split/before-after-split.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-before-after-split',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-accordions-tabs-before-after-split" [attr.data-active]="active()">
      <h3>Variante 03 — Comparador Visual Before / After con Cortina Deslizable</h3>
      <p>Arrastra el control divisor horizontal para comparar en tiempo real dos estados o arquitecturas superpuestas.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdBeforeAfterSplitComponent {
  active = signal(false);
}
