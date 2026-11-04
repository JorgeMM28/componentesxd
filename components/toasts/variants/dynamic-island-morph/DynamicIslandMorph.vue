<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountDynamicIslandMorph } from './dynamic-island-morph.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountDynamicIslandMorph(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-toast cxd-toast--island" data-cxd-control="dynamic-island-morph" ref="root"><strong data-title>MODO COMPACTO // IDLE</strong><button type="button" data-mode="compact">Compacto</button><button type="button" data-mode="expanded">Expandir detalles</button><p data-details hidden>Despliegue en curso hacia 12 regiones · 94% completado.</p><span role="status">Modo compacto</span></div></template>
