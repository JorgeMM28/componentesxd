// Variante 07 — Banner Content-Fit Flotante Tipo Píldora — Angular 18+ Signals (components/toasts/variants/content-fit-pill-banner/content-fit-pill-banner.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-content-fit-pill-banner',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-toasts-content-fit-pill-banner" [attr.data-active]="active()">
      <h3>Variante 07 — Banner Content-Fit Flotante Tipo Píldora</h3>
      <p>Ajustado exactamente al ancho del mensaje con insignia de novedad y botón de acción compacto.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdContentFitPillBannerComponent {
  active = signal(false);
}
