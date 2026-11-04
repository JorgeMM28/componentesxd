<!-- Variante 04 — Carrusel Vertical Tipo Reel / Conmutador de Escenas en Eje Y — Vue 3 SFC (components/carousels/variants/vertical-telemetry-reel/VerticalTelemetryReel.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-carousels-vertical-telemetry-reel" :data-active="active">
    <h3>Variante 04 — Carrusel Vertical Tipo Reel / Conmutador de Escenas en Eje Y</h3>
    <p>Transición vertical elástica entre paneles de telemetría con selector lateral numerado y controles arriba/abajo.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
