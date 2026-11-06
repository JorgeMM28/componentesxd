<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountOrderTracker } from './order-tracker.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountOrderTracker(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-order" data-cxd-control="order-tracker" ref="root"><header><small>PEDIDO #CX-2048</small><h3 data-order-title>Preparación</h3></header><ol data-stages><li>Pagado</li><li>Preparación</li><li>En ruta</li><li>Entregado</li></ol><div class="cxd-special__actions"><button type="button" data-next>Avanzar pedido</button><button type="button" data-reset>Reiniciar</button></div><span role="status"></span></section></template>
