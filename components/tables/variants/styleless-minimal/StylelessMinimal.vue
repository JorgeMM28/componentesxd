<!-- Variante 02 — Tabla Styleless (Sin Bordes / Editorial) — Vue 3 SFC (components/tables/variants/styleless-minimal/StylelessMinimal.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-tables-styleless-minimal" :data-active="active">
    <h3>Variante 02 — Tabla Styleless (Sin Bordes / Editorial)</h3>
    <p>Sin contenedor exterior ni líneas verticales. Puramente tipográfica con alineación generosa y subrayado sutil.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
