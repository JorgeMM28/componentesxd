<!-- Variante 08 — Tarjeta con Despliegue de Detalles Técnicos — Vue 3 SFC (components/cards/variants/expandable-drawer-card/ExpandableDrawerCard.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-cards-expandable-drawer-card" :data-active="active">
    <h3>Variante 08 — Tarjeta con Despliegue de Detalles Técnicos</h3>
    <p>Haz clic en el botón de expansión para revelar u ocultar el bloque completo de logs y nodos.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
