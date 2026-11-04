<!-- Variante 30 — Radar Sonar Táctico de 360° con Detección e Intercepción de Objetivos — Vue 3 SFC (components/special-hybrids/variants/cyber-radar-threat-sonar/CyberRadarThreatSonar.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-cyber-radar-threat-sonar" :data-active="active">
    <h3>Variante 30 — Radar Sonar Táctico de 360° con Detección e Intercepción de Objetivos</h3>
    <p>Barrido rotatorio continuo con coordenadas polares, detección de objetivos y lanzamiento de vectores de intercepción.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
