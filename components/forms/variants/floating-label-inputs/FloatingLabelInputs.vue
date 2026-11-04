<!-- Variante 04 — Inputs con Etiqueta Flotante Animada — Vue 3 SFC (components/forms/variants/floating-label-inputs/FloatingLabelInputs.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-forms-floating-label-inputs" :data-active="active">
    <h3>Variante 04 — Inputs con Etiqueta Flotante Animada</h3>
    <p>La etiqueta viaja suavemente hacia el borde superior cuando haces clic o escribes contenido.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
