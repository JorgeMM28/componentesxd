<!-- Variante 03 — Formulario Content-Fit en Una Sola Línea — Vue 3 SFC (components/forms/variants/content-fit-inline-bar/ContentFitInlineBar.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-forms-content-fit-inline-bar" :data-active="active">
    <h3>Variante 03 — Formulario Content-Fit en Una Sola Línea</h3>
    <p>Combina selector de prefijo, campo de texto y botón de envío en una sola cápsula compacta.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
