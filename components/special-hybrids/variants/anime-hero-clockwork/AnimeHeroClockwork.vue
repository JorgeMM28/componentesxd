<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountAnimeHeroClockwork } from './anime-hero-clockwork.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountAnimeHeroClockwork(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--stages" data-cxd-control="anime-hero-clockwork" ref="root"><header><small>RELOJERÍA CINÉTICA</small><h3>Relojería cinética</h3></header><p data-copy>Escenario reiniciado</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Relojería</button><button type="button" data-item="1" aria-pressed="false">Explosión</button><button type="button" data-item="2" aria-pressed="false">Vórtice</button></div><strong data-output>Relojería</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Iniciar coreografía</button><button type="button" data-reset>Restaurar</button></div><span role="status">Escenario reiniciado</span></section></template>
