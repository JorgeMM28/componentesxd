<!-- Variante 08 — Controles Interactivos (Switches, Stepper Numérico y Radios) — Vue 3 SFC (components/forms/variants/tactile-switches-sliders/TactileSwitchesSliders.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-forms-tactile-switches-sliders" :data-active="active">
    <h3>Variante 08 — Controles Interactivos (Switches, Stepper Numérico y Radios)</h3>
    <p>Interruptores animados, contador con botones +/- y selector de tarjetas de opción.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
