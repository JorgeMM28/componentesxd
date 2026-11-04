<!-- Variante 01 — Colección de Badges Modernos, Outline y Con Punto Pulsante — Vue 3 SFC (components/badges-data/variants/modern-pulse-badges/ModernPulseBadges.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-badges-data-modern-pulse-badges" :data-active="active">
    <h3>Variante 01 — Colección de Badges Modernos, Outline y Con Punto Pulsante</h3>
    <p>Insignias redondeadas, cuadradas, sin bordes y con botón de cierre eliminable en vivo.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
