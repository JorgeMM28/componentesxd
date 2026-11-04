<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountChronoSlaIncidentTable } from './chrono-sla-incident-table.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountChronoSlaIncidentTable(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-special" data-cxd-control="chrono-sla-incident-table" ref="root"><h3>Incidentes SLA</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Resolver incidente</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Incidente reabierto</span></div></template>
