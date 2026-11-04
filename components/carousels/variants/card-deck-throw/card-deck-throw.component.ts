// Variante 08 — Carrusel Mazo de Tarjetas con Descarte Elástico (Swipe / Throw Deck) — Angular 18+ Signals (components/carousels/variants/card-deck-throw/card-deck-throw.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-card-deck-throw',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-carousels-card-deck-throw" [attr.data-active]="active()">
      <h3>Variante 08 — Carrusel Mazo de Tarjetas con Descarte Elástico (Swipe / Throw Deck)</h3>
      <p>Pila interactiva donde cada acción lanza la tarjeta activa con rotación física y promueve la siguiente del mazo.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdCardDeckThrowComponent {
  active = signal(false);
}
