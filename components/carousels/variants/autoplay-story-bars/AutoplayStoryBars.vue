<!-- Variante 07 — Carrusel con Barras de Tiempo Segmentadas (Autoplay + Pausa) — Vue 3 SFC (components/carousels/variants/autoplay-story-bars/AutoplayStoryBars.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-carousels-autoplay-story-bars" :data-active="active">
    <h3>Variante 07 — Carrusel con Barras de Tiempo Segmentadas (Autoplay + Pausa)</h3>
    <p>Cabecera con segmentos de progreso temporales que avanzan automáticamente y permiten saltar a cualquier historia.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
