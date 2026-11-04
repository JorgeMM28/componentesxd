<!-- Variante 26 — Sistema Solar Animado Completo (Sol + 8 Planetas + Luna + Cinturón de Asteroides + Saturno) — Vue 3 SFC (components/special-hybrids/variants/orbital-solar-gravity-sim/OrbitalSolarGravitySim.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-orbital-solar-gravity-sim" :data-active="active">
    <h3>Variante 26 — Sistema Solar Animado Completo (Sol + 8 Planetas + Luna + Cinturón de Asteroides + Saturno)</h3>
    <p>Simulación heliocéntrica continua con Mercurio, Venus, Tierra + Luna, Marte, Cinturón de Asteroides, Júpiter, Saturno con anillos, Urano y Neptuno, selector de telemetría planetaria y escala de tiempo Warp.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
