<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountChartEditor } from './chart-editor.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountChartEditor(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-chart" data-cxd-control="chart-editor" ref="root"><header><small>INGRESOS</small><h3>Editor de gráfico</h3><select data-chart-type><option value="bars">Barras</option><option value="line">Línea</option></select></header><div class="cxd-chart__canvas" data-chart><i style="--height:42%"></i><i style="--height:78%"></i><i style="--height:56%"></i><i style="--height:91%"></i></div><button type="button" data-random>Generar datos</button><span role="status">Visualización de barras.</span></section></template>
