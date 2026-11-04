<!-- Variante 03 — Tarjeta Flotante con Perspectiva 3D Interactiva — Vue 3 SFC (components/cards/variants/floating-3d-tilt/Floating3dTilt.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-cards-floating-3d-tilt" :data-active="active">
    <h3>Variante 03 — Tarjeta Flotante con Perspectiva 3D Interactiva</h3>
    <p>Mueve el cursor encima para inclinar la tarjeta en 3 ejes (rotateX / rotateY) con sombra profunda.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
