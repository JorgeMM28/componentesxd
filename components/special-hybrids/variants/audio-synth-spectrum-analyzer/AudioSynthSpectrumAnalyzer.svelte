<!-- Variante 28 — Analizador de Espectro de 28 Bandas + Osciloscopio Vectorial en Vivo — Svelte 5 Runes (components/special-hybrids/variants/audio-synth-spectrum-analyzer/AudioSynthSpectrumAnalyzer.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-audio-synth-spectrum-analyzer" data-active={active}>
  <h3>Variante 28 — Analizador de Espectro de 28 Bandas + Osciloscopio Vectorial en Vivo</h3>
  <p>Alterna entre perfiles acústicos (Sub-Bass, Cyberpunk Arp, Harmonics) animando las frecuencias y la onda sinusoidal.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
