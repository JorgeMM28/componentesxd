// Variante 28 — Analizador de Espectro de 28 Bandas + Osciloscopio Vectorial en Vivo — Angular 18+ Signals (components/special-hybrids/variants/audio-synth-spectrum-analyzer/audio-synth-spectrum-analyzer.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-audio-synth-spectrum-analyzer',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-audio-synth-spectrum-analyzer" [attr.data-active]="active()">
      <h3>Variante 28 — Analizador de Espectro de 28 Bandas + Osciloscopio Vectorial en Vivo</h3>
      <p>Alterna entre perfiles acústicos (Sub-Bass, Cyberpunk Arp, Harmonics) animando las frecuencias y la onda sinusoidal.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdAudioSynthSpectrumAnalyzerComponent {
  active = signal(false);
}
