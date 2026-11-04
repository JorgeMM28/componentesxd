// Variante 06 — Grupo de Avatares Flotantes con Inspector de Usuario — Angular 18+ Signals (components/badges-data/variants/avatar-stack-interactive/avatar-stack-interactive.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-avatar-stack-interactive',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-badges-data-avatar-stack-interactive" [attr.data-active]="active()">
      <h3>Variante 06 — Grupo de Avatares Flotantes con Inspector de Usuario</h3>
      <p>Haz clic en cualquier miembro del equipo para ver su rol, estado y permisos activos.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdAvatarStackInteractiveComponent {
  active = signal(false);
}
