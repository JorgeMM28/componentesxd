// Variante 02 — Navbar Flotante Redondeada Tipo Cápsula — Angular 18+ Signals (components/navigation/variants/floating-pill-navbar/floating-pill-navbar.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-floating-pill-navbar',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-navigation-floating-pill-navbar" [attr.data-active]="active()">
      <h3>Variante 02 — Navbar Flotante Redondeada Tipo Cápsula</h3>
      <p>Barra superior centrada con bordes completamente redondeados, enlaces activos y botón CTA.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdFloatingPillNavbarComponent {
  active = signal(false);
}
