<!-- Variante 01 — Carrusel 3D Coverflow con Perspectiva e Inclinación — Vue 3 SFC (components/carousels/variants/coverflow-3d/Coverflow3d.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-carousels-coverflow-3d" :data-active="active">
    <h3>Variante 01 — Carrusel 3D Coverflow con Perspectiva e Inclinación</h3>
    <p>Tarjetas en perspectiva tridimensional donde la diapositiva central avanza al frente y las laterales rotan en eje Y con Anime.js v4.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
