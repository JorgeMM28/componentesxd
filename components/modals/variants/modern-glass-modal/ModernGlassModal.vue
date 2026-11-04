<!-- Variante 01 — Modal Moderno con Bordes Redondeados y Blur — Vue 3 SFC (components/modals/variants/modern-glass-modal/ModernGlassModal.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-modals-modern-glass-modal" :data-active="active">
    <h3>Variante 01 — Modal Moderno con Bordes Redondeados y Blur</h3>
    <p>Ventana de diálogo con cabecera limpia, cuerpo estructurado y botones que abren/cierran la vista.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
