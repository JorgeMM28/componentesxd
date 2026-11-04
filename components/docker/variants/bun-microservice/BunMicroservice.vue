<!-- Variante 05 — Microservicio Ultra-Rápido con Bun Alpine — Vue 3 SFC (components/docker/variants/bun-microservice/BunMicroservice.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-docker-bun-microservice" :data-active="active">
    <h3>Variante 05 — Microservicio Ultra-Rápido con Bun Alpine</h3>
    <p>Ejecución directa de TypeScript con arranque en milisegundos y consumo mínimo de RAM.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
