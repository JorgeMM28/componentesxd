<!-- Variante 01 — Acordeón Exclusivo (Single-Open) con Animación de Altura — Vue 3 SFC (components/accordions-tabs/variants/accordion-exclusive/AccordionExclusive.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-accordions-tabs-accordion-exclusive" :data-active="active">
    <h3>Variante 01 — Acordeón Exclusivo (Single-Open) con Animación de Altura</h3>
    <p>Al expandir una sección técnica se cierran automáticamente las demás manteniendo el foco de lectura.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
