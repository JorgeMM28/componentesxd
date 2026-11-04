<!-- Variante 14 — Buscador de Nodos + Matriz 2D con Onda Radial (stagger grid) — Vue 3 SFC (components/special-hybrids/variants/search-grid-2d-ripple/SearchGrid2dRipple.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-search-grid-2d-ripple" :data-active="active">
    <h3>Variante 14 — Buscador de Nodos + Matriz 2D con Onda Radial (stagger grid)</h3>
    <p>Haz clic en cualquier nodo del cluster o filtra por estado para expandir una onda 2D desde ese punto exacto.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
