<!-- Variante 05 — Carrusel Split-Screen Sincronizado (Arte Visual + Especificaciones) — Vue 3 SFC (components/carousels/variants/split-editorial-showcase/SplitEditorialShowcase.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-carousels-split-editorial-showcase" :data-active="active">
    <h3>Variante 05 — Carrusel Split-Screen Sincronizado (Arte Visual + Especificaciones)</h3>
    <p>Doble panel donde el lienzo visual izquierdo y la ficha técnica derecha se actualizan de forma coordinada con stagger.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
