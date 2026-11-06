<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountOrbitalSolarGravitySim } from './orbital-solar-gravity-sim.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountOrbitalSolarGravitySim(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--config" data-cxd-control="orbital-solar-gravity-sim" ref="root"><header><small>SIMULADOR ORBITAL</small><h3>Simulador orbital</h3></header><p data-copy>Tiempo normal</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Tierra</button><button type="button" data-item="1" aria-pressed="false">Júpiter</button><button type="button" data-item="2" aria-pressed="false">Saturno</button></div><strong data-output>Tierra</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Acelerar órbitas</button><button type="button" data-reset>Restaurar</button></div><span role="status">Tiempo normal</span></section></template>
