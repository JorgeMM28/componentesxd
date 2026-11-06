<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountChartEditor } from './chart-editor.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountChartEditor(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--config" data-cxd-control="chart-editor" ref="root"><header><small>EDITOR DE GRÁFICOS</small><h3>Editor de gráficos</h3></header><p data-copy>Gráfico restaurado</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Columnas</button><button type="button" data-item="1" aria-pressed="false">Líneas</button><button type="button" data-item="2" aria-pressed="false">Área</button></div><strong data-output>Columnas</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Cambiar visual</button><button type="button" data-reset>Restaurar</button></div><span role="status">Gráfico restaurado</span></section></template>
