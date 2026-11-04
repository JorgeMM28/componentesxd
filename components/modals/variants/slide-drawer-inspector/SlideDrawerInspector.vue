<!-- Variante 06 — Panel Inspector Lateral (Drawer de Detalles) — Vue 3 SFC (components/modals/variants/slide-drawer-inspector/SlideDrawerInspector.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-modals-slide-drawer-inspector" :data-active="active">
    <h3>Variante 06 — Panel Inspector Lateral (Drawer de Detalles)</h3>
    <p>Estructura de panel lateral con pestañas de propiedades, JSON en vivo y botones de acción.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
