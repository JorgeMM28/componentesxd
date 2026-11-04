<!-- Variante 15 — Command Palette + Consola de Ejecución Paso a Paso Animada — Vue 3 SFC (components/special-hybrids/variants/modal-command-choreography/ModalCommandChoreography.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-modal-command-choreography" :data-active="active">
    <h3>Variante 15 — Command Palette + Consola de Ejecución Paso a Paso Animada</h3>
    <p>Dispara cualquier comando de la lista para ejecutar una secuencia de terminal animada en tiempo real.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
