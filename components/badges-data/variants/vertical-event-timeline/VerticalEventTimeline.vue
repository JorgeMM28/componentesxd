<!-- Variante 04 — Línea de Tiempo (Timeline) con Filtro de Eventos — Vue 3 SFC (components/badges-data/variants/vertical-event-timeline/VerticalEventTimeline.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-badges-data-vertical-event-timeline" :data-active="active">
    <h3>Variante 04 — Línea de Tiempo (Timeline) con Filtro de Eventos</h3>
    <p>Cronología vertical con nodos conectados, estados de despliegue y botón para agregar nuevo evento.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
