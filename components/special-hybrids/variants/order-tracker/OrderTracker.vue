<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountOrderTracker } from './order-tracker.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountOrderTracker(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-special" data-cxd-control="order-tracker" ref="root"><h3>Seguimiento de pedidos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Avanzar pedido</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Pedido restaurado</span></div></template>
