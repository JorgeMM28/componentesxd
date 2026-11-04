<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountSpaNginxAlpine } from './spa-nginx-alpine.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountSpaNginxAlpine(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-docker-flow" data-cxd-control="spa-nginx-alpine" ref="root"><h3>SPA + Nginx</h3><ol class="cxd-docker-flow__stages" data-stages><li class="cxd-docker-flow__stage" data-stage aria-current="true">Generar bundle Vite</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Resolver rutas con try_files</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Servir assets inmutables</li></ol><div class="cxd-docker-flow__actions"><button type="button" data-run>Simular siguiente salto</button><button type="button" data-reset>Reiniciar topología</button></div><span role="status" aria-live="polite">Listo para simular la topología.</span></section></template>
