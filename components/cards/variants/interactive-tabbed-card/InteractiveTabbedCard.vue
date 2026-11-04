<!-- Variante 04 — Tarjeta Interactiva con Pestañas Internas — Vue 3 SFC (components/cards/variants/interactive-tabbed-card/InteractiveTabbedCard.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-cards-interactive-tabbed-card" :data-active="active">
    <h3>Variante 04 — Tarjeta Interactiva con Pestañas Internas</h3>
    <p>Alterna entre Resumen, Métricas y Configuración dentro de la misma tarjeta sin recargar.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
