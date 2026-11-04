<!-- Variante 09 — Tabla Expandible Master-Detail (Despliegue de Sub-Panel) — Vue 3 SFC (components/tables/variants/expandable-detail/ExpandableDetail.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-tables-expandable-detail" :data-active="active">
    <h3>Variante 09 — Tabla Expandible Master-Detail (Despliegue de Sub-Panel)</h3>
    <p>Haz clic en cualquier fila para desplegar un panel técnico con historial, métricas y especificaciones.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
