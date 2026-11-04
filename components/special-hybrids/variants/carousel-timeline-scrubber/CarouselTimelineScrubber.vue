<!-- Variante 13 — Carrusel Cinético Controlado por Slider Scrubber (timeline.seek) — Vue 3 SFC (components/special-hybrids/variants/carousel-timeline-scrubber/CarouselTimelineScrubber.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-carousel-timeline-scrubber" :data-active="active">
    <h3>Variante 13 — Carrusel Cinético Controlado por Slider Scrubber (timeline.seek)</h3>
    <p>Arrastra la barra de tiempo para controlar manualmente la posición, rotación y escala de todo el carrusel.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
