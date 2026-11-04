<!-- Variante 02 — Laravel 11 + Livewire 3 + PHP 8.3 FPM + OPcache — Vue 3 SFC (components/docker/variants/laravel-livewire-fpm/LaravelLivewireFpm.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-docker-laravel-livewire-fpm" :data-active="active">
    <h3>Variante 02 — Laravel 11 + Livewire 3 + PHP 8.3 FPM + OPcache</h3>
    <p>Imagen lista para Laravel y Blade con OPcache JIT, Redis, PostgreSQL y Composer 2.8.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
