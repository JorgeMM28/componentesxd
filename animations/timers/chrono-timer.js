/**
 * ============================================================================
 * ANIME.JS v4 VAULT — 09. CHRONO TIMER DE ALTA PRECISIÓN (`createTimer`)
 * Archivo: animations/timers/chrono-timer.js
 * ============================================================================
 * Usa la API nativa `createTimer()` de Anime.js v4 para gestionar un bucle de
 * tiempo exacto con control de play, pause, reset y sincronización de anillo SVG.
 */
import { createTimer, animate } from 'animejs';

export class ChronoTimerController {
  constructor({ displayEl, ringEl, durationMs = 15000, onComplete }) {
    this.displayEl = displayEl;
    this.ringEl = ringEl;
    this.durationMs = durationMs;
    this.circumference = 283; // 2 * PI * 45

    this.timer = createTimer({
      duration: durationMs,
      autoplay: false,
      onUpdate: (self) => {
        const elapsed = self.currentTime;
        const remaining = Math.max(0, durationMs - elapsed);
        const seconds = Math.floor(remaining / 1000);
        const centis = Math.floor((remaining % 1000) / 10);

        if (this.displayEl) {
          this.displayEl.textContent = `${String(seconds).padStart(2, '0')}.${String(centis).padStart(2, '0')}s`;
        }

        if (this.ringEl) {
          const progress = Math.min(1, elapsed / durationMs);
          this.ringEl.style.strokeDashoffset = String(this.circumference * progress);
        }
      },
      onComplete: () => {
        if (this.displayEl) {
          animate(this.displayEl, {
            scale: [1, 1.18, 1],
            duration: 450,
            ease: 'outBack'
          });
        }
        onComplete?.();
      }
    });
  }

  play() {
    this.timer.play();
  }

  pause() {
    this.timer.pause();
  }

  restart() {
    this.timer.restart();
  }
}

