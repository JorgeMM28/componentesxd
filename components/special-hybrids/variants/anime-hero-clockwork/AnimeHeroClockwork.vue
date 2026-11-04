<!-- Variante 21 — Escenario Relojería Cinética & Onda Radial (Inspirado en el Hero Oficial de Anime.js v4) — Vue 3 SFC (components/special-hybrids/variants/anime-hero-clockwork/AnimeHeroClockwork.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-anime-hero-clockwork" :data-active="active">
    <h3>Variante 21 — Escenario Relojería Cinética & Onda Radial (Inspirado en el Hero Oficial de Anime.js v4)</h3>
    <p>36 vectores radiales concéntricos, anillos orbitales y matriz sincronizada que ejecutan coreografías de relojería, explosión solar, vórtice espiral y pulso cuántico.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
