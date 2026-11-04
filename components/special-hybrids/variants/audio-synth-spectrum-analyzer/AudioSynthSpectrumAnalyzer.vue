<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountAudioSynthSpectrumAnalyzer } from './audio-synth-spectrum-analyzer.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountAudioSynthSpectrumAnalyzer(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-special" data-cxd-control="audio-synth-spectrum-analyzer" ref="root"><h3>Analizador de espectro</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Cambiar perfil</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Perfil base</span></div></template>
