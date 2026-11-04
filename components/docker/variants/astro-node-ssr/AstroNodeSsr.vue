<!-- Variante 01 — Astro / Node 22 Alpine Multi-Stage SSR — Vue 3 SFC (components/docker/variants/astro-node-ssr/AstroNodeSsr.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-docker-astro-node-ssr" :data-active="active">
    <h3>Variante 01 — Astro / Node 22 Alpine Multi-Stage SSR</h3>
    <p>Contenedor de producción de 3 etapas (deps → builder → runner sin root) para Astro, Next o Remix.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
