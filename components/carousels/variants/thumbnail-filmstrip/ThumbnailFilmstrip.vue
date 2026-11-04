<!-- Variante 06 — Carrusel Galería con Tira Inferior de Miniaturas (Filmstrip) — Vue 3 SFC (components/carousels/variants/thumbnail-filmstrip/ThumbnailFilmstrip.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-carousels-thumbnail-filmstrip" :data-active="active">
    <h3>Variante 06 — Carrusel Galería con Tira Inferior de Miniaturas (Filmstrip)</h3>
    <p>Escenario principal de gran formato conectado a una banda interactiva de miniaturas con enfoque activo.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
