<!-- Variante 07 — Sidebar Lateral Colapsable con Árbol de Proyectos y Estado de Clúster — Vue 3 SFC (components/navigation/variants/collapsible-sidebar/CollapsibleSidebar.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <nav class="cxd-navigation-collapsible-sidebar" :data-active="active">
    <h3>Variante 07 — Sidebar Lateral Colapsable con Árbol de Proyectos y Estado de Clúster</h3>
    <p>Panel de navegación lateral con botón de colapso cinético (240px ↔ 68px), selector de entorno (Prod/Staging), árbol de módulos e indicador de salud.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </nav>
</template>
