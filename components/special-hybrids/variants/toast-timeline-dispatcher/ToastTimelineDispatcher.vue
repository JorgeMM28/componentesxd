<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountToastTimelineDispatcher } from './toast-timeline-dispatcher.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountToastTimelineDispatcher(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--board" data-cxd-control="toast-timeline-dispatcher" ref="root"><header><small>DESPACHADOR DE ALERTAS</small><h3>Despachador de alertas</h3></header><p data-copy>La cola está vacía</p><div class="cxd-special__scene" data-scene data-shape="board"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Sincronización</button><button type="button" data-item="1" aria-pressed="false">Respaldo</button><button type="button" data-item="2" aria-pressed="false">Alerta</button></div><strong data-output>Sincronización</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Despachar alerta</button><button type="button" data-reset>Restaurar</button></div><span role="status">La cola está vacía</span></section></template>
