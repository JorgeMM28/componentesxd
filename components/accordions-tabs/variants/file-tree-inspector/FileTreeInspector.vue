<!-- Variante 06 — Árbol de Directorios Colapsable con Inspector de Archivo Activo — Vue 3 SFC (components/accordions-tabs/variants/file-tree-inspector/FileTreeInspector.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-accordions-tabs-file-tree-inspector" :data-active="active">
    <h3>Variante 06 — Árbol de Directorios Colapsable con Inspector de Archivo Activo</h3>
    <p>Estructura jerárquica de carpetas y archivos clicables que actualiza el visor de contenido derecho.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
