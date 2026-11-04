<!-- Variante 03 — Medidores Circulares SVG con Control Deslizante en Vivo — Vue 3 SFC (components/badges-data/variants/interactive-svg-gauges/InteractiveSvgGauges.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-badges-data-interactive-svg-gauges" :data-active="active">
    <h3>Variante 03 — Medidores Circulares SVG con Control Deslizante en Vivo</h3>
    <p>Mueve el control deslizante para actualizar en tiempo real el porcentaje y los anillos SVG.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
