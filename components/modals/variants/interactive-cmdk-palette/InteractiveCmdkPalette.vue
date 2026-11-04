<!-- Variante 02 — Command Palette Interactiva (Buscador en Vivo) — Vue 3 SFC (components/modals/variants/interactive-cmdk-palette/InteractiveCmdkPalette.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-modals-interactive-cmdk-palette" :data-active="active">
    <h3>Variante 02 — Command Palette Interactiva (Buscador en Vivo)</h3>
    <p>Escribe en el buscador para filtrar comandos al instante y haz clic en cualquiera para ejecutarlo.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
