<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountIsometric3dCityCluster } from './isometric-3d-city-cluster.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountIsometric3dCityCluster(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--telemetry" data-cxd-control="isometric-3d-city-cluster" ref="root"><header><small>CLÚSTER ISOMÉTRICO</small><h3>Clúster isométrico</h3></header><p data-copy>Clúster restaurado</p><div class="cxd-special__scene" data-scene data-shape="telemetry"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Nodo 01</button><button type="button" data-item="1" aria-pressed="false">Nodo 08</button><button type="button" data-item="2" aria-pressed="false">Nodo 16</button></div><strong data-output>Nodo 01</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Distribuir carga</button><button type="button" data-reset>Restaurar</button></div><span role="status">Clúster restaurado</span></section></template>
