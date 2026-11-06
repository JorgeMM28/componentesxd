<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountServerMonitor } from './server-monitor.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountServerMonitor(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-monitor" data-cxd-control="server-monitor" ref="root"><header><small>NOC · SALUD</small><h3>Monitor de servidores</h3><button type="button" data-refresh>Actualizar</button></header><div data-metrics><label>API <meter min="0" max="100" value="98"></meter><b>98%</b></label><label>Worker <meter min="0" max="100" value="72"></meter><b>72%</b></label><label>Base de datos <meter min="0" max="100" value="64"></meter><b>64%</b></label></div><span role="status">Lectura estable.</span></section></template>
