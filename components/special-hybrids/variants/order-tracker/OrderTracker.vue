<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountOrderTracker } from './order-tracker.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountOrderTracker(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--config" data-cxd-control="order-tracker" ref="root"><header><small>SEGUIMIENTO DE PEDIDOS</small><h3>Seguimiento de pedidos</h3></header><p data-copy>Pedido restaurado</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Pagado</button><button type="button" data-item="1" aria-pressed="false">Preparación</button><button type="button" data-item="2" aria-pressed="false">En ruta</button></div><strong data-output>Pagado</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Avanzar pedido</button><button type="button" data-reset>Restaurar</button></div><span role="status">Pedido restaurado</span></section></template>
