<!-- Variante 07 — Barra de Botones Content-Fit con Indicador Activo — Vue 3 SFC (components/buttons/variants/segmented-toolbar-fit/SegmentedToolbarFit.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-buttons-segmented-toolbar-fit" :data-active="active">
    <h3>Variante 07 — Barra de Botones Content-Fit con Indicador Activo</h3>
    <p>Grupo compacto unido donde la selección activa cambia instantáneamente al hacer clic.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
