<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountDualTransferStaggerSync } from './dual-transfer-stagger-sync.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountDualTransferStaggerSync(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-special" data-cxd-control="dual-transfer-stagger-sync" ref="root"><h3>Sincronizador de permisos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Transferir módulo</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Listas restauradas</span></div></template>
