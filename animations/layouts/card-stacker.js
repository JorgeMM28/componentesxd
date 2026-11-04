/**
 * ============================================================================
 * ANIME.JS v4 VAULT — 06. 3D CARD STACKER (PILA INTERACTIVA DE TARJETAS)
 * Archivo: animations/layouts/card-stacker.js
 * ============================================================================
 * Apila tarjetas en perspectiva 3D usando `stagger` para distribuir `translateY`,
 * `scale` y `opacity`. Permite rotar la tarjeta frontal hacia el fondo con
 * física elástica.
 */
import { animate } from 'animejs';

export class CardStacker {
  constructor(containerSelector) {
    this.root = typeof containerSelector === 'string'
      ? document.querySelector(containerSelector)
      : containerSelector;
    this.cards = Array.from(this.root?.querySelectorAll('[data-stack-card]') || []);
    this.layout(0);
  }

  layout(duration = 550) {
    this.cards.forEach((card, index) => {
      card.style.zIndex = String(this.cards.length - index);
      animate(card, {
        y: index * -14,
        scale: 1 - index * 0.055,
        opacity: index > 3 ? 0 : 1 - index * 0.18,
        rotateX: index * -2,
        duration,
        ease: 'outBack'
      });
    });
  }

  cycleNext() {
    if (this.cards.length < 2) return;
    const frontCard = this.cards.shift();

    animate(frontCard, {
      y: [0, 42, -28],
      scale: [1, 0.85],
      opacity: [1, 0.2, 0.45],
      duration: 420,
      ease: 'inOutCubic',
      onComplete: () => {
        this.cards.push(frontCard);
        this.layout(520);
      }
    });
  }
}

