<!-- Variante 08 — Menubar Desktop Clásico con Menús Flotantes (Archivo, Edición, Git) — Vue 3 SFC (components/navigation/variants/desktop-menubar/DesktopMenubar.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <nav class="cxd-navigation-desktop-menubar" :data-active="active">
    <h3>Variante 08 — Menubar Desktop Clásico con Menús Flotantes (Archivo, Edición, Git)</h3>
    <p>Barra horizontal estilo aplicación de escritorio con menús desplegables en cascada al hacer hover o clic, atajos de teclado e indicador de sync.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </nav>
</template>
