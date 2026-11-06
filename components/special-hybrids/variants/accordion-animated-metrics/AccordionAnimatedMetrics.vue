<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountAccordionAnimatedMetrics } from './accordion-animated-metrics.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountAccordionAnimatedMetrics(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--config" data-cxd-control="accordion-animated-metrics" ref="root"><header><small>MÉTRICAS DE SERVICIO</small><h3>Métricas de servicio</h3></header><p data-copy>Métricas contraídas</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Salud</button><button type="button" data-item="1" aria-pressed="false">Caché</button><button type="button" data-item="2" aria-pressed="false">Seguridad</button></div><strong data-output>Salud</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Expandir métrica</button><button type="button" data-reset>Restaurar</button></div><span role="status">Métricas contraídas</span></section></template>
