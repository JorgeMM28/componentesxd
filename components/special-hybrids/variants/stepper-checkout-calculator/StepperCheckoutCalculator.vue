<!-- Variante 06 — Step-by-Step Configurador Cloud + Motor "Calculando..." en Tiempo Real — Vue 3 SFC (components/special-hybrids/variants/stepper-checkout-calculator/StepperCheckoutCalculator.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-stepper-checkout-calculator" :data-active="active">
    <h3>Variante 06 — Step-by-Step Configurador Cloud + Motor "Calculando..." en Tiempo Real</h3>
    <p>Avanza por las etapas de hardware, red y réplicas recalculando el costo mensual con animación numérica instantánea.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
