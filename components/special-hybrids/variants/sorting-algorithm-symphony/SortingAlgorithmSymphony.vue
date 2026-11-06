<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountSortingAlgorithmSymphony } from './sorting-algorithm-symphony.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountSortingAlgorithmSymphony(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--board" data-cxd-control="sorting-algorithm-symphony" ref="root"><header><small>SINFONÍA DE ORDENAMIENTO</small><h3>Sinfonía de ordenamiento</h3></header><p data-copy>Valores mezclados</p><div class="cxd-special__scene" data-scene data-shape="board"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">QuickSort</button><button type="button" data-item="1" aria-pressed="false">BubbleSort</button><button type="button" data-item="2" aria-pressed="false">Insertion</button></div><strong data-output>QuickSort</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Ordenar columnas</button><button type="button" data-reset>Restaurar</button></div><span role="status">Valores mezclados</span></section></template>
