<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountEventCalendar } from './event-calendar.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountEventCalendar(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-calendar" data-cxd-control="event-calendar" ref="root"><header><small>OCTUBRE 2026</small><h3 data-event-title>Calendario editorial</h3></header><div data-days><button type="button" data-event="Demo de producto">12<span>Demo</span></button><button type="button" data-event="Sync de diseño">16<span>Sync</span></button><button type="button" data-event="Lanzamiento">23<span>Launch</span></button></div><div class="cxd-special__actions"><button type="button" data-add>Crear evento</button><button type="button" data-clear>Limpiar selección</button></div><span role="status">Tres fechas destacadas.</span></section></template>
