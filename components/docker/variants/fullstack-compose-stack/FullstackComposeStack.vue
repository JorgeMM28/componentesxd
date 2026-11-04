<!-- Variante 04 — Docker Compose Fullstack (App + Postgres 17 + Redis 7.4) — Vue 3 SFC (components/docker/variants/fullstack-compose-stack/FullstackComposeStack.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-docker-fullstack-compose-stack" :data-active="active">
    <h3>Variante 04 — Docker Compose Fullstack (App + Postgres 17 + Redis 7.4)</h3>
    <p>Orquestación completa con volúmenes persistentes y healthchecks automáticos.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
