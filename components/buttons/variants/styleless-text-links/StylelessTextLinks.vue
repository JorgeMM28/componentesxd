<!-- Variante 02 — Botones Styleless (Subrayado Cinético sin Caja) — Vue 3 SFC (components/buttons/variants/styleless-text-links/StylelessTextLinks.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-buttons-styleless-text-links" :data-active="active">
    <h3>Variante 02 — Botones Styleless (Subrayado Cinético sin Caja)</h3>
    <p>Cero bordes ni fondos: línea inferior que crece de izquierda a derecha y flecha SVG que avanza al pasar el cursor.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
