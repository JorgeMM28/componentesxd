<!-- Variante 20 — Tabla de Incidentes en Vivo + Cronómetro SLA (createTimer) + Resolución — Vue 3 SFC (components/special-hybrids/variants/chrono-sla-incident-table/ChronoSlaIncidentTable.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-chrono-sla-incident-table" :data-active="active">
    <h3>Variante 20 — Tabla de Incidentes en Vivo + Cronómetro SLA (createTimer) + Resolución</h3>
    <p>Monitorea el tiempo transcurrido en vivo con centésimas de segundo y resuelve incidentes con animación de fila.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
