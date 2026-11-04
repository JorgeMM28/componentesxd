<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountEventCalendar } from './event-calendar.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountEventCalendar(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-special" data-cxd-control="event-calendar" ref="root"><h3>Calendario de eventos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Añadir evento</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Calendario restaurado</span></div></template>
