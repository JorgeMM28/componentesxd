<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFileExplorer } from './file-explorer.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFileExplorer(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--telemetry" data-cxd-control="file-explorer" ref="root"><header><small>EXPLORADOR DE ARCHIVOS</small><h3>Explorador de archivos</h3></header><p data-copy>Explorador restaurado</p><div class="cxd-special__scene" data-scene data-shape="telemetry"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">src</button><button type="button" data-item="1" aria-pressed="false">components</button><button type="button" data-item="2" aria-pressed="false">README.md</button></div><strong data-output>src</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Abrir archivo</button><button type="button" data-reset>Restaurar</button></div><span role="status">Explorador restaurado</span></section></template>
