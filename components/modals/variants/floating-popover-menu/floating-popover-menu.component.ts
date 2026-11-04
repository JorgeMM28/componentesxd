// Variante 03 — Menú Popover Flotante Content-Fit con Acciones — Angular 18+ Signals (components/modals/variants/floating-popover-menu/floating-popover-menu.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-floating-popover-menu',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-modals-floating-popover-menu" [attr.data-active]="active()">
      <h3>Variante 03 — Menú Popover Flotante Content-Fit con Acciones</h3>
      <p>Menú contextual compacto con opciones rápidas, atajos de teclado e interruptor integrado.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdFloatingPopoverMenuComponent {
  active = signal(false);
}
