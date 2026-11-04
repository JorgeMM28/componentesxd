<!-- Variante 22 — Mapa Mundial Interactivo con Rutas de Tráfico en Vivo (svg.createMotionPath) — Vue 3 SFC (components/special-hybrids/variants/interactive-world-telemetry-map/InteractiveWorldTelemetryMap.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-interactive-world-telemetry-map" :data-active="active">
    <h3>Variante 22 — Mapa Mundial Interactivo con Rutas de Tráfico en Vivo (svg.createMotionPath)</h3>
    <p>Haz clic en cualquier centro de datos (Tokyo, Frankfurt, New York, São Paulo, Sydney, SF) para redirigir los paquetes luminosos globales y disparar ondas de choque.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
