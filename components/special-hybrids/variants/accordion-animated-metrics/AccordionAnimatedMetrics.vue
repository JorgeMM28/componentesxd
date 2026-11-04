<!-- Variante 18 — Acordeón Técnico + Telemetría que Anima de 0% a 100% al Expandir — Vue 3 SFC (components/special-hybrids/variants/accordion-animated-metrics/AccordionAnimatedMetrics.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-accordion-animated-metrics" :data-active="active">
    <h3>Variante 18 — Acordeón Técnico + Telemetría que Anima de 0% a 100% al Expandir</h3>
    <p>Cada vez que abres una sección del acordeón, sus barras y métricas internas se animan dinámicamente.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
