<!-- Variante 02 — Inputs Styleless (Solo Línea Inferior Minimalista) — Vue 3 SFC (components/forms/variants/styleless-underline-inputs/StylelessUnderlineInputs.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-forms-styleless-underline-inputs" :data-active="active">
    <h3>Variante 02 — Inputs Styleless (Solo Línea Inferior Minimalista)</h3>
    <p>Sin cajas laterales ni fondo: únicamente una línea inferior que se ilumina al escribir.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
