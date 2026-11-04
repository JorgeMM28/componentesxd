<!-- Variante 27 — Ciudadela Isométrica 3D de Servidores con Onda Espacial 4×4 — Vue 3 SFC (components/special-hybrids/variants/isometric-3d-city-cluster/Isometric3dCityCluster.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-isometric-3d-city-cluster" :data-active="active">
    <h3>Variante 27 — Ciudadela Isométrica 3D de Servidores con Onda Espacial 4×4</h3>
    <p>16 torres tridimensionales en perspectiva isométrica real que modulan su elevación Z con stagger 2D radial.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
