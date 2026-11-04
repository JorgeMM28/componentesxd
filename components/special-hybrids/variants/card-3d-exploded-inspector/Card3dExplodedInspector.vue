<!-- Variante 11 — Tarjeta Inspectora + Descomposición 3D de Capas Estructurales — Vue 3 SFC (components/special-hybrids/variants/card-3d-exploded-inspector/Card3dExplodedInspector.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-card-3d-exploded-inspector" :data-active="active">
    <h3>Variante 11 — Tarjeta Inspectora + Descomposición 3D de Capas Estructurales</h3>
    <p>Alterna entre la tarjeta ensamblada funcional y su vista explotada isométrica de 4 capas en vivo.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
