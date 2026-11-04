<!-- Variante 06 — Tarjeta con Formulario Rápido de Cotización / Config — Vue 3 SFC (components/cards/variants/form-embedded-card/FormEmbeddedCard.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-cards-form-embedded-card" :data-active="active">
    <h3>Variante 06 — Tarjeta con Formulario Rápido de Cotización / Config</h3>
    <p>Permite ajustar parámetros con inputs y calcular el costo mensual directamente en la tarjeta.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
