// Variante 01 — Navbar con Menú en Cascada Multi-Nivel (Estilo Microsoft) — Angular 18+ Signals (components/navigation/variants/microsoft-cascade-nav/microsoft-cascade-nav.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-microsoft-cascade-nav',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-navigation-microsoft-cascade-nav" [attr.data-active]="active()">
      <h3>Variante 01 — Navbar con Menú en Cascada Multi-Nivel (Estilo Microsoft)</h3>
      <p>Selecciona una categoría principal para desplegar sus sub-categorías y luego sus variantes finales.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdMicrosoftCascadeNavComponent {
  active = signal(false);
}
