<!-- Variante 01 — Botones Modernos Redondeados (Píldora & Glow) — Vue 3 SFC (components/buttons/variants/modern-rounded-pills/ModernRoundedPills.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-buttons-modern-rounded-pills" :data-active="active">
    <h3>Variante 01 — Botones Modernos Redondeados (Píldora & Glow)</h3>
    <p>Bordes completamente redondeados (999px), degradado sutil, sombra difusa y micro-escala al hacer clic.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
