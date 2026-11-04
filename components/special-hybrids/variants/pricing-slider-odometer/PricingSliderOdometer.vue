<!-- Variante 16 — Calculadora Interactiva con Slider + Odómetro + Barras Comparativas — Vue 3 SFC (components/special-hybrids/variants/pricing-slider-odometer/PricingSliderOdometer.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-pricing-slider-odometer" :data-active="active">
    <h3>Variante 16 — Calculadora Interactiva con Slider + Odómetro + Barras Comparativas</h3>
    <p>Ajusta el volumen de tráfico para animar simultáneamente las barras de los 3 planes y el costo estimado.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
