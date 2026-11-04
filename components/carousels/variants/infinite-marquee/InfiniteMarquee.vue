<!-- Variante 02 — Carrusel Marquesina Infinita Continua (Control de Velocidad y Dirección) — Vue 3 SFC (components/carousels/variants/infinite-marquee/InfiniteMarquee.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-carousels-infinite-marquee" :data-active="active">
    <h3>Variante 02 — Carrusel Marquesina Infinita Continua (Control de Velocidad y Dirección)</h3>
    <p>Cinta continua sin costuras para nodos, métricas o marcas con botones para invertir dirección, pausar o acelerar en vivo.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
