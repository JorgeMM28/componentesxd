<!-- Variante 17 — Topología Docker + Simulador de Paquetes en Red con Anime.js — Vue 3 SFC (components/special-hybrids/variants/docker-live-deploy-topology/DockerLiveDeployTopology.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-docker-live-deploy-topology" :data-active="active">
    <h3>Variante 17 — Topología Docker + Simulador de Paquetes en Red con Anime.js</h3>
    <p>Envía paquetes de prueba a través del proxy, aplicación y base de datos animando cada salto y latencia.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
