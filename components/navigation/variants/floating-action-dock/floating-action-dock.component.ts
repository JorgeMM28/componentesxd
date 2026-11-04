// Variante 05 — Dock Flotante Inferior con Escalado al Pasar el Cursor — Angular 18+ Signals (components/navigation/variants/floating-action-dock/floating-action-dock.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-floating-action-dock',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-navigation-floating-action-dock" [attr.data-active]="active()">
      <h3>Variante 05 — Dock Flotante Inferior con Escalado al Pasar el Cursor</h3>
      <p>Barra de iconos de acceso rápido con insignias de estado e indicador de aplicación activa.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdFloatingActionDockComponent {
  active = signal(false);
}
