<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountVerticalTelemetryReel } from './vertical-telemetry-reel.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountVerticalTelemetryReel(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-carousel" data-cxd-control="vertical-telemetry-reel" ref="root" aria-label="Reel vertical"><div class="cxd-carousel__viewport cxd-reel"><article class="cxd-carousel__item" data-slide><small>01 / 04</small><strong>Aurora</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>02 / 04</small><strong>Órbita</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>03 / 04</small><strong>Nébula</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>04 / 04</small><strong>Horizonte</strong><p>Una nueva perspectiva para explorar.</p></article></div><div class="cxd-carousel__controls"><button type="button" data-prev aria-label="Anterior">← Anterior</button><button type="button" data-next aria-label="Siguiente">Siguiente →</button></div><span role="status" aria-live="polite"></span></div></template>
