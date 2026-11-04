<!-- Variante 06 — Alerta Styleless Minimalista (Tipografía + Línea) — Vue 3 SFC (components/toasts/variants/styleless-minimal-alert/StylelessMinimalAlert.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-toasts-styleless-minimal-alert" :data-active="active">
    <h3>Variante 06 — Alerta Styleless Minimalista (Tipografía + Línea)</h3>
    <p>Sin caja ni sombras: solo una línea vertical de 2px, texto directo y enlace de acción limpio.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
