<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountBunMicroservice } from './bun-microservice.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountBunMicroservice(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-docker-flow" data-cxd-control="bun-microservice" ref="root"><h3>Microservicio Bun</h3><ol class="cxd-docker-flow__stages" data-stages><li class="cxd-docker-flow__stage" data-stage aria-current="true">Resolver lockfile</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Ejecutar TypeScript nativo</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Exponer endpoint HTTP</li></ol><div class="cxd-docker-flow__actions"><button type="button" data-run>Simular siguiente salto</button><button type="button" data-reset>Reiniciar topología</button></div><span role="status" aria-live="polite">Listo para simular la topología.</span></section></template>
