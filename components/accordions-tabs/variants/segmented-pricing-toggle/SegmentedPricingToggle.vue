<!-- Variante 05 — Conmutador de Planes Mensual / Anual con Recálculo Animado — Vue 3 SFC (components/accordions-tabs/variants/segmented-pricing-toggle/SegmentedPricingToggle.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-accordions-tabs-segmented-pricing-toggle" :data-active="active">
    <h3>Variante 05 — Conmutador de Planes Mensual / Anual con Recálculo Animado</h3>
    <p>Alterna entre facturación mensual y anual aplicando descuento automático e interpolando las tarifas en vivo.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
