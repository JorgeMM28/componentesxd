<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountAstroNodeSsr } from './astro-node-ssr.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountAstroNodeSsr(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-docker-flow" data-cxd-control="astro-node-ssr" ref="root"><h3>Astro / Node SSR</h3><ol class="cxd-docker-flow__stages" data-stages><li class="cxd-docker-flow__stage" data-stage aria-current="true">Instalar dependencias</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Compilar rutas estáticas</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Arrancar runner sin root</li></ol><div class="cxd-docker-flow__actions"><button type="button" data-run>Simular siguiente salto</button><button type="button" data-reset>Reiniciar topología</button></div><span role="status" aria-live="polite">Listo para simular la topología.</span></section></template>
