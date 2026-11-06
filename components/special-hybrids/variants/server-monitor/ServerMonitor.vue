<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountServerMonitor } from './server-monitor.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountServerMonitor(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--config" data-cxd-control="server-monitor" ref="root"><header><small>MONITOR DE SERVIDORES</small><h3>Monitor de servidores</h3></header><p data-copy>Monitor en espera</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">api-01</button><button type="button" data-item="1" aria-pressed="false">worker-02</button><button type="button" data-item="2" aria-pressed="false">db-primary</button></div><strong data-output>api-01</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Actualizar métricas</button><button type="button" data-reset>Restaurar</button></div><span role="status">Monitor en espera</span></section></template>
