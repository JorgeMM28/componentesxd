<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFullstackComposeStack } from './fullstack-compose-stack.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFullstackComposeStack(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-docker-flow" data-cxd-control="fullstack-compose-stack" ref="root"><h3>Compose full-stack</h3><ol class="cxd-docker-flow__stages" data-stages><li class="cxd-docker-flow__stage" data-stage aria-current="true">Esperar healthcheck de Postgres</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Conectar Redis</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Levantar aplicación</li></ol><div class="cxd-docker-flow__actions"><button type="button" data-run>Simular siguiente salto</button><button type="button" data-reset>Reiniciar topología</button></div><span role="status" aria-live="polite">Listo para simular la topología.</span></section></template>
