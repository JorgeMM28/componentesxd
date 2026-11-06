<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountDualTransferStaggerSync } from './dual-transfer-stagger-sync.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountDualTransferStaggerSync(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--telemetry" data-cxd-control="dual-transfer-stagger-sync" ref="root"><header><small>SINCRONIZADOR DE PERMISOS</small><h3>Sincronizador de permisos</h3></header><p data-copy>Listas restauradas</p><div class="cxd-special__scene" data-scene data-shape="telemetry"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">WAF</button><button type="button" data-item="1" aria-pressed="false">Brotli</button><button type="button" data-item="2" aria-pressed="false">HTTP/3</button></div><strong data-output>WAF</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Transferir módulo</button><button type="button" data-reset>Restaurar</button></div><span role="status">Listas restauradas</span></section></template>
