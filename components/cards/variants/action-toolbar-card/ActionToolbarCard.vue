<!-- Variante 05 — Tarjeta con Barra de Acciones (Favorito, Compartir, Archivar) — Vue 3 SFC (components/cards/variants/action-toolbar-card/ActionToolbarCard.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-cards-action-toolbar-card" :data-active="active">
    <h3>Variante 05 — Tarjeta con Barra de Acciones (Favorito, Compartir, Archivar)</h3>
    <p>Incluye botones inferiores interactivos con contadores que se actualizan en tiempo real.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
