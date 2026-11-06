<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountSeatMap } from './seat-map.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountSeatMap(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-seats" data-cxd-control="seat-map" ref="root"><header><small>SALA A · 12 DISPONIBLES</small><h3 data-seat-title>Elige un asiento</h3></header><div data-seat-grid><button type="button">A1</button><button type="button">A2</button><button type="button">A3</button><button type="button">B1</button><button type="button">B2</button><button type="button">B3</button><button type="button">C1</button><button type="button">C2</button><button type="button">C3</button></div><button type="button" data-reserve disabled>Reservar asiento</button><span role="status">9 asientos en el mapa.</span></section></template>
