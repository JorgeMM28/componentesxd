// Variante 01 — Modal Moderno con Bordes Redondeados y Blur — Angular 18+ Signals (components/modals/variants/modern-glass-modal/modern-glass-modal.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-modern-glass-modal',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-modals-modern-glass-modal" [attr.data-active]="active()">
      <h3>Variante 01 — Modal Moderno con Bordes Redondeados y Blur</h3>
      <p>Ventana de diálogo con cabecera limpia, cuerpo estructurado y botones que abren/cierran la vista.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdModernGlassModalComponent {
  active = signal(false);
}
