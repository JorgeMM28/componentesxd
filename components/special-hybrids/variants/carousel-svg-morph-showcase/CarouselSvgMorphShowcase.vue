<!-- Variante 04 — Carrusel de Escenas + Transformación Geométrica SVG (svg.morphTo) — Vue 3 SFC (components/special-hybrids/variants/carousel-svg-morph-showcase/CarouselSvgMorphShowcase.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-carousel-svg-morph-showcase" :data-active="active">
    <h3>Variante 04 — Carrusel de Escenas + Transformación Geométrica SVG (svg.morphTo)</h3>
    <p>Cada diapositiva del carrusel transforma los vértices del polígono vectorial central e interpola las métricas del sistema.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
