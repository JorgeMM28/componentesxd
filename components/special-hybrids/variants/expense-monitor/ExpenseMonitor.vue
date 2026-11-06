<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountExpenseMonitor } from './expense-monitor.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountExpenseMonitor(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-expenses" data-cxd-control="expense-monitor" ref="root"><header><small>PRESUPUESTO · OCT</small><h3>Monitor de gastos</h3></header><div data-expenses><label>Infraestructura <input type="number" min="0" value="7200" /></label><label>Marketing <input type="number" min="0" value="3100" /></label><label>Operación <input type="number" min="0" value="2180" /></label></div><footer><strong data-total></strong><output data-remaining></output></footer><span role="status"></span></section></template>
