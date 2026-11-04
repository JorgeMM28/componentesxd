// Variante 08 — Menubar Desktop Clásico con Menús Flotantes (Archivo, Edición, Git) — Angular 18+ Signals (components/navigation/variants/desktop-menubar/desktop-menubar.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-desktop-menubar',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <nav class="cxd-navigation-desktop-menubar" [attr.data-active]="active()">
      <h3>Variante 08 — Menubar Desktop Clásico con Menús Flotantes (Archivo, Edición, Git)</h3>
      <p>Barra horizontal estilo aplicación de escritorio con menús desplegables en cascada al hacer hover o clic, atajos de teclado e indicador de sync.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </nav>
  `
})
export class CxdDesktopMenubarComponent {
  active = signal(false);
}
