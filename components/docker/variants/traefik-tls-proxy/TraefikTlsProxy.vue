<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountTraefikTlsProxy } from './traefik-tls-proxy.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountTraefikTlsProxy(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-docker-flow" data-cxd-control="traefik-tls-proxy" ref="root"><h3>Traefik TLS</h3><ol class="cxd-docker-flow__stages" data-stages><li class="cxd-docker-flow__stage" data-stage aria-current="true">Resolver certificado ACME</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Balancear réplicas</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Publicar métricas</li></ol><div class="cxd-docker-flow__actions"><button type="button" data-run>Simular siguiente salto</button><button type="button" data-reset>Reiniciar topología</button></div><span role="status" aria-live="polite">Listo para simular la topología.</span></section></template>
