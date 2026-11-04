// Variante 06 — Carrusel Galería con Tira Inferior de Miniaturas (Filmstrip) — Angular 18+ Signals (components/carousels/variants/thumbnail-filmstrip/thumbnail-filmstrip.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-thumbnail-filmstrip',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-carousels-thumbnail-filmstrip" [attr.data-active]="active()">
      <h3>Variante 06 — Carrusel Galería con Tira Inferior de Miniaturas (Filmstrip)</h3>
      <p>Escenario principal de gran formato conectado a una banda interactiva de miniaturas con enfoque activo.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdThumbnailFilmstripComponent {
  active = signal(false);
}
