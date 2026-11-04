<!-- Variante 08 — Toaster Interactivo de Subida de Archivos — Vue 3 SFC (components/toasts/variants/upload-progress-toaster/UploadProgressToaster.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-toasts-upload-progress-toaster" :data-active="active">
    <h3>Variante 08 — Toaster Interactivo de Subida de Archivos</h3>
    <p>Simula la subida de múltiples archivos con porcentaje animado en tiempo real y botón de pausa/reinicio.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
