<!-- Variante 01 — Navbar con Menú en Cascada Multi-Nivel (Estilo Microsoft) — Vue 3 SFC (components/navigation/variants/microsoft-cascade-nav/MicrosoftCascadeNav.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-navigation-microsoft-cascade-nav" :data-active="active">
    <h3>Variante 01 — Navbar con Menú en Cascada Multi-Nivel (Estilo Microsoft)</h3>
    <p>Selecciona una categoría principal para desplegar sus sub-categorías y luego sus variantes finales.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
