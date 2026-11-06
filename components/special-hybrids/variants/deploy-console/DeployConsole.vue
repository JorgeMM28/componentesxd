<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountDeployConsole } from './deploy-console.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountDeployConsole(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-deploy" data-cxd-control="deploy-console" ref="root"><header><small>PRODUCTION</small><h3>Consola de despliegue</h3></header><pre data-log>$ listo para desplegar</pre><div class="cxd-special__actions"><button type="button" data-deploy>Desplegar versión</button><button type="button" data-clear>Limpiar</button></div><span role="status">Build #482 preparado.</span></section></template>
