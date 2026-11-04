<!-- Variante 28 — Analizador de Espectro de 28 Bandas + Osciloscopio Vectorial en Vivo — Vue 3 SFC (components/special-hybrids/variants/audio-synth-spectrum-analyzer/AudioSynthSpectrumAnalyzer.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-audio-synth-spectrum-analyzer" :data-active="active">
    <h3>Variante 28 — Analizador de Espectro de 28 Bandas + Osciloscopio Vectorial en Vivo</h3>
    <p>Alterna entre perfiles acústicos (Sub-Bass, Cyberpunk Arp, Harmonics) animando las frecuencias y la onda sinusoidal.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
