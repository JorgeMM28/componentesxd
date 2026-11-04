<!-- Variante 04 — Breadcrumbs Interactivos con Selector de Rama/Proyecto — Vue 3 SFC (components/navigation/variants/interactive-breadcrumbs/InteractiveBreadcrumbs.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-navigation-interactive-breadcrumbs" :data-active="active">
    <h3>Variante 04 — Breadcrumbs Interactivos con Selector de Rama/Proyecto</h3>
    <p>Ruta de navegación con menús desplegables integrados en cada nivel de jerarquía.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
