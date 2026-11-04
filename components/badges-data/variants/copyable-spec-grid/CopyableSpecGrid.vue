<!-- Variante 05 — Lista Clave-Valor con Copiado al Portapapeles por Fila — Vue 3 SFC (components/badges-data/variants/copyable-spec-grid/CopyableSpecGrid.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-badges-data-copyable-spec-grid" :data-active="active">
    <h3>Variante 05 — Lista Clave-Valor con Copiado al Portapapeles por Fila</h3>
    <p>Haz clic en cualquier valor técnico (API Key, Host, SHA) para copiarlo instantáneamente.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
