<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountExpenseMonitor } from './expense-monitor.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountExpenseMonitor(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--stages" data-cxd-control="expense-monitor" ref="root"><header><small>MONITOR DE GASTOS</small><h3>Monitor de gastos</h3></header><p data-copy>Presupuesto restaurado</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Infraestructura</button><button type="button" data-item="1" aria-pressed="false">Marketing</button><button type="button" data-item="2" aria-pressed="false">Operación</button></div><strong data-output>Infraestructura</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Registrar gasto</button><button type="button" data-reset>Restaurar</button></div><span role="status">Presupuesto restaurado</span></section></template>
