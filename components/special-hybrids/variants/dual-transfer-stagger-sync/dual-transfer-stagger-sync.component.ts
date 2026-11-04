// Variante 19 — Transferencia Dual de Módulos + Sincronización Masiva en Cascada — Angular 18+ Signals (components/special-hybrids/variants/dual-transfer-stagger-sync/dual-transfer-stagger-sync.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-dual-transfer-stagger-sync',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-dual-transfer-stagger-sync" [attr.data-active]="active()">
      <h3>Variante 19 — Transferencia Dual de Módulos + Sincronización Masiva en Cascada</h3>
      <p>Mueve módulos uno por uno o transfiere todo el bloque con una animación escalonada de Anime.js.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdDualTransferStaggerSyncComponent {
  active = signal(false);
}
