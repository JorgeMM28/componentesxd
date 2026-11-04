<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountVerticalEventTimeline } from './vertical-event-timeline.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountVerticalEventTimeline(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-data" data-cxd-control="vertical-event-timeline" ref="root"><strong>Cronología de eventos</strong><button type="button" data-add>+ Agregar evento</button><div class="cxd-data__list" data-list aria-live="polite"><div class="cxd-data__item">Despliegue completado</div><div class="cxd-data__item">Archivos sincronizados</div></div></div></template>
