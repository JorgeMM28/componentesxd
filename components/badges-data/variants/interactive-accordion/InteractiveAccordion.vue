<!-- Variante 02 — Acordeón Interactivo Multi-Sección — Vue 3 SFC (components/badges-data/variants/interactive-accordion/InteractiveAccordion.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-badges-data-interactive-accordion" :data-active="active">
    <h3>Variante 02 — Acordeón Interactivo Multi-Sección</h3>
    <p>Haz clic en cualquier cabecera para expandir o contraer su contenido suavemente.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
