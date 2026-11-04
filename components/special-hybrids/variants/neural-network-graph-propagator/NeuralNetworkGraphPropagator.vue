<!-- Variante 25 — Grafo de Red Neuronal Multicapa con Sinapsis SVG y Propagación Softmax — Vue 3 SFC (components/special-hybrids/variants/neural-network-graph-propagator/NeuralNetworkGraphPropagator.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-neural-network-graph-propagator" :data-active="active">
    <h3>Variante 25 — Grafo de Red Neuronal Multicapa con Sinapsis SVG y Propagación Softmax</h3>
    <p>Dispara una inferencia para ver los tensores viajar por las 15 sinapsis SVG a través de las capas ocultas hasta calcular la predicción final.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
