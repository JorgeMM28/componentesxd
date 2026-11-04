<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountSeatMap } from './seat-map.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountSeatMap(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-special" data-cxd-control="seat-map" ref="root"><h3>Mapa de asientos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Reservar asiento</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Mapa restaurado</span></div></template>
