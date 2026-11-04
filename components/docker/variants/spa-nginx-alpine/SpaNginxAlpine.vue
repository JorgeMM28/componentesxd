<!-- Variante 03 — React / Vue / Svelte / Angular SPA + Nginx — Vue 3 SFC (components/docker/variants/spa-nginx-alpine/SpaNginxAlpine.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-docker-spa-nginx-alpine" :data-active="active">
    <h3>Variante 03 — React / Vue / Svelte / Angular SPA + Nginx</h3>
    <p>Compilación estática servida por Nginx Alpine con compresión gzip y try_files para rutas SPA.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
