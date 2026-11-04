// Variante 10 — Mobile Bottom Tab Bar Táctil con Micro-Interacciones Cinéticas — Angular 18+ Signals (components/navigation/variants/mobile-touch-tabbar/mobile-touch-tabbar.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-mobile-touch-tabbar',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <nav class="cxd-navigation-mobile-touch-tabbar" [attr.data-active]="active()">
      <h3>Variante 10 — Mobile Bottom Tab Bar Táctil con Micro-Interacciones Cinéticas</h3>
      <p>Barra inferior flotante tipo iOS/Android con 5 destinos táctiles, pastilla indicadora animada con Anime.js v4 y badges de notificaciones.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </nav>
  `
})
export class CxdMobileTouchTabbarComponent {
  active = signal(false);
}
