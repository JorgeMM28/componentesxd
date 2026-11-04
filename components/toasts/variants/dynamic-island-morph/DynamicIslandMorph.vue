<!-- Variante 02 — Dynamic Island Interactiva (3 Estados) — Vue 3 SFC (components/toasts/variants/dynamic-island-morph/DynamicIslandMorph.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-toasts-dynamic-island-morph" :data-active="active">
    <h3>Variante 02 — Dynamic Island Interactiva (3 Estados)</h3>
    <p>Cápsula negra brillante que cambia de tamaño con Anime.js entre Compacto, Llamada/Proceso y Expandido.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
