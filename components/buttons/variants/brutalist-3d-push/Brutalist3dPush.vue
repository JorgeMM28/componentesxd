<!-- Variante 08 — Botón Mecánico 3D de Presión Física — Vue 3 SFC (components/buttons/variants/brutalist-3d-push/Brutalist3dPush.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-buttons-brutalist-3d-push" :data-active="active">
    <h3>Variante 08 — Botón Mecánico 3D de Presión Física</h3>
    <p>Borde grueso y sombra sólida inferior que se hunde físicamente cada vez que lo presionas.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
