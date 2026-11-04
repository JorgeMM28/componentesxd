<!-- Variante 06 — Botón con Menú de Acciones (Split Dropdown) — Vue 3 SFC (components/buttons/variants/split-dropdown-action/SplitDropdownAction.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-buttons-split-dropdown-action" :data-active="active">
    <h3>Variante 06 — Botón con Menú de Acciones (Split Dropdown)</h3>
    <p>Botón dividido: la izquierda ejecuta la acción seleccionada y la derecha despliega la lista de modos.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
