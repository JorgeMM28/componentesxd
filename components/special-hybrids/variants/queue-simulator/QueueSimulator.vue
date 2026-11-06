<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountQueueSimulator } from './queue-simulator.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountQueueSimulator(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-queue" data-cxd-control="queue-simulator" ref="root"><header><small>WORKER · 1 DISPONIBLE</small><h3>Simulador de cola</h3></header><ol data-queue><li>exportar-reporte</li><li>indexar-búsqueda</li><li>enviar-resumen</li></ol><div class="cxd-special__actions"><button type="button" data-process>Procesar siguiente</button><button type="button" data-reset>Restaurar cola</button></div><span role="status"></span></section></template>
