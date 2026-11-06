<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountCarouselTimelineScrubber } from './carousel-timeline-scrubber.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountCarouselTimelineScrubber(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--stages" data-cxd-control="carousel-timeline-scrubber" ref="root"><header><small>LÍNEA DE TIEMPO</small><h3>Línea de tiempo</h3></header><p data-copy>Escena inicial</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Geist</button><button type="button" data-item="1" aria-pressed="false">Swiss</button><button type="button" data-item="2" aria-pressed="false">Industrial</button></div><strong data-output>Geist</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Avanzar escena</button><button type="button" data-reset>Restaurar</button></div><span role="status">Escena inicial</span></section></template>
